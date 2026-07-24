import { Resend } from 'resend';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY ?? 're_placeholder');
  return _resend;
}

const FROM = process.env.EMAIL_FROM ?? 'bookings@warringtoncardetailing.co.uk';
const ADMIN_EMAIL = process.env.EMAIL_ADMIN ?? 'admin@warringtoncardetailing.co.uk';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://warringtoncardetailing.co.uk';

function baseTemplate(content: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 32px auto; background: #1a1a1a; border-radius: 12px; overflow: hidden; }
  .header { background: linear-gradient(135deg, #c9a84c, #e8c96b, #a8872d); padding: 32px; text-align: center; }
  .header h1 { color: #0a0a0a; margin: 0; font-size: 24px; font-weight: 800; }
  .header p { color: #0a0a0a; margin: 8px 0 0; opacity: 0.8; font-size: 14px; }
  .body { padding: 32px; color: #f5f5f5; }
  .body p { line-height: 1.6; color: #d1d5db; margin: 0 0 16px; }
  .detail-box { background: #2d2d2d; border-radius: 8px; padding: 20px; margin: 20px 0; }
  .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #404040; font-size: 14px; }
  .detail-row:last-child { border-bottom: none; }
  .detail-label { color: #9ca3af; }
  .detail-value { color: #f5f5f5; font-weight: 600; }
  .btn { display: inline-block; background: linear-gradient(135deg, #c9a84c, #e8c96b); color: #0a0a0a; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; margin: 20px 0; font-size: 15px; }
  .badge { display: inline-block; background: #c9a84c; color: #0a0a0a; border-radius: 999px; padding: 4px 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
  .footer { padding: 24px 32px; border-top: 1px solid #2d2d2d; text-align: center; }
  .footer p { color: #6b7280; font-size: 12px; margin: 4px 0; }
  .footer a { color: #c9a84c; text-decoration: none; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>WCD Detailing</h1>
    <p>Premium Car Detailing · Warrington</p>
  </div>
  <div class="body">${content}</div>
  <div class="footer">
    <p>WCD Detailing · Unit 1 Fairclough Mill · Warrington WA5 1AH</p>
    <p><a href="tel:+447375759686">07375 759686</a> · <a href="${SITE_URL}">${SITE_URL.replace('https://', '')}</a></p>
    <p style="margin-top:12px;color:#4b5563;">You're receiving this because you booked with us.</p>
  </div>
</div>
</body>
</html>`;
}

// ── Customer: Booking Confirmation ───────────────────────────────────────────

export async function sendBookingConfirmation(data: {
  customerName: string;
  customerEmail: string;
  bookingRef: string;
  scheduledDate: Date;
  services: string[];
  totalAmount: number;
  depositAmount: number;
  depositPaid: boolean;
  vehicleDescription: string;
}) {
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(data.scheduledDate));

  const html = baseTemplate(`
    <span class="badge">Booking Confirmed</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">Hi ${data.customerName},</h2>
    <p>Your booking has been confirmed. We look forward to seeing your vehicle!</p>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Booking Reference</span><span class="detail-value">${data.bookingRef}</span></div>
      <div class="detail-row"><span class="detail-label">Date & Time</span><span class="detail-value">${dateStr}</span></div>
      <div class="detail-row"><span class="detail-label">Vehicle</span><span class="detail-value">${data.vehicleDescription}</span></div>
      <div class="detail-row"><span class="detail-label">Services</span><span class="detail-value">${data.services.join(', ')}</span></div>
      <div class="detail-row"><span class="detail-label">Total</span><span class="detail-value">£${Number(data.totalAmount).toFixed(2)}</span></div>
      <div class="detail-row"><span class="detail-label">Deposit</span><span class="detail-value">${data.depositPaid ? `£${Number(data.depositAmount).toFixed(2)} paid` : 'Pay on arrival'}</span></div>
    </div>
    <p><strong style="color:#f5f5f5;">Location:</strong><br />Unit 1 Fairclough Mill, Atherton's Quay, Warrington WA5 1AH</p>
    <p style="margin-top:8px;">Please arrive 5 minutes before your appointment. If you need to reschedule, call us at least 24 hours in advance.</p>
    <center><a class="btn" href="tel:+447375759686">📞 07375 759686</a></center>
  `, 'Booking Confirmed — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.customerEmail,
    subject: `Booking Confirmed — ${data.bookingRef} | WCD Detailing`,
    html,
  });
}

// ── Customer: Reminder ───────────────────────────────────────────────────────

export async function sendBookingReminder(data: {
  customerName: string;
  customerEmail: string;
  bookingRef: string;
  scheduledDate: Date;
  services: string[];
  balanceDue: number;
}) {
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(data.scheduledDate));

  const html = baseTemplate(`
    <span class="badge">Reminder</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">Hi ${data.customerName},</h2>
    <p>This is a friendly reminder about your booking <strong style="color:#c9a84c;">${data.bookingRef}</strong> tomorrow.</p>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Date & Time</span><span class="detail-value">${dateStr}</span></div>
      <div class="detail-row"><span class="detail-label">Services</span><span class="detail-value">${data.services.join(', ')}</span></div>
      ${data.balanceDue > 0 ? `<div class="detail-row"><span class="detail-label">Balance Due</span><span class="detail-value" style="color:#c9a84c;">£${Number(data.balanceDue).toFixed(2)}</span></div>` : ''}
    </div>
    <p><strong style="color:#f5f5f5;">Address:</strong> Unit 1 Fairclough Mill, Atherton's Quay, Warrington WA5 1AH</p>
    <p>Need to reschedule? Please call us as soon as possible.</p>
    <center><a class="btn" href="tel:+447375759686">📞 Call to Reschedule</a></center>
  `, 'Booking Reminder — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.customerEmail,
    subject: `Reminder: Your booking tomorrow — ${data.bookingRef}`,
    html,
  });
}

// ── Customer: Review Request ─────────────────────────────────────────────────

export async function sendReviewRequest(data: {
  customerName: string;
  customerEmail: string;
  bookingRef: string;
  services: string[];
}) {
  const html = baseTemplate(`
    <h2 style="color:#f5f5f5;margin:0 0 8px;">How did we do, ${data.customerName}?</h2>
    <p>Thank you for choosing WCD Detailing for your <strong style="color:#c9a84c;">${data.services.join(' & ')}</strong>. We hope you're loving the results!</p>
    <p>Your feedback helps us improve and helps other car owners find us. It takes less than 60 seconds.</p>
    <center><a class="btn" href="https://g.page/r/WCDdetailing/review">⭐ Leave a Google Review</a></center>
    <p style="margin-top:24px;font-size:13px;color:#6b7280;">If anything wasn't perfect, please call us directly and we'll make it right — <a href="tel:+447375759686" style="color:#c9a84c;">07375 759686</a></p>
  `, 'How did we do? — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.customerEmail,
    subject: `How did we do? ⭐ — WCD Detailing`,
    html,
  });
}

// ── Customer: Booking Confirmed by Admin ─────────────────────────────────────

export async function sendBookingConfirmedByAdmin(data: {
  customerName: string;
  customerEmail: string;
  bookingRef: string;
  scheduledDate: Date;
  services: string[];
  totalAmount: number;
  depositAmount: number;
  depositPaid: boolean;
  vehicleDescription: string;
}) {
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(data.scheduledDate));

  const html = baseTemplate(`
    <span class="badge">Confirmed</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">Great news, ${data.customerName}!</h2>
    <p>Our team has confirmed your booking. Everything is set — we look forward to seeing your vehicle!</p>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Booking Reference</span><span class="detail-value">${data.bookingRef}</span></div>
      <div class="detail-row"><span class="detail-label">Date & Time</span><span class="detail-value">${dateStr}</span></div>
      <div class="detail-row"><span class="detail-label">Vehicle</span><span class="detail-value">${data.vehicleDescription}</span></div>
      <div class="detail-row"><span class="detail-label">Services</span><span class="detail-value">${data.services.join(', ')}</span></div>
      <div class="detail-row"><span class="detail-label">Total</span><span class="detail-value">£${Number(data.totalAmount).toFixed(2)}</span></div>
      <div class="detail-row"><span class="detail-label">Balance Due</span><span class="detail-value">£${(Number(data.totalAmount) - Number(data.depositAmount)).toFixed(2)} on arrival</span></div>
    </div>
    <p><strong style="color:#f5f5f5;">Location:</strong><br />Unit 1 Fairclough Mill, Atherton's Quay, Warrington WA5 1AH</p>
    <p>Please arrive 5 minutes early. Need to reschedule? Call us at least 24 hours in advance.</p>
    <center><a class="btn" href="tel:+447375759686">📞 07375 759686</a></center>
  `, 'Booking Confirmed — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.customerEmail,
    subject: `Confirmed: Your appointment on ${new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' }).format(new Date(data.scheduledDate))} — ${data.bookingRef}`,
    html,
  });
}

// ── Customer: Booking Cancelled ───────────────────────────────────────────────

export async function sendBookingCancelledEmail(data: {
  customerName: string;
  customerEmail: string;
  bookingRef: string;
  scheduledDate: Date;
  reason?: string;
}) {
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(data.scheduledDate));

  const html = baseTemplate(`
    <span class="badge" style="background:#ef4444;">Cancelled</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">Booking Cancelled</h2>
    <p>Hi ${data.customerName}, your booking has been cancelled.</p>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Booking Reference</span><span class="detail-value">${data.bookingRef}</span></div>
      <div class="detail-row"><span class="detail-label">Original Date</span><span class="detail-value">${dateStr}</span></div>
      ${data.reason ? `<div class="detail-row"><span class="detail-label">Reason</span><span class="detail-value">${data.reason}</span></div>` : ''}
    </div>
    <p>If you'd like to rebook or have any questions, please don't hesitate to get in touch.</p>
    <center><a class="btn" href="${SITE_URL}/book">Book Again</a></center>
    <p style="text-align:center;font-size:13px;color:#6b7280;">Or call us: <a href="tel:+447375759686" style="color:#c9a84c;">07375 759686</a></p>
  `, 'Booking Cancelled — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.customerEmail,
    subject: `Booking cancelled — ${data.bookingRef} | WCD Detailing`,
    html,
  });
}

// ── Enquiry System: New Enquiry Alert (Supabase simple bookings) ─────────────

export async function sendEnquiryAlertToAdmin(data: {
  full_name: string;
  email: string;
  phone: string;
  address: string;
  vehicle_make: string;
  vehicle_model: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
}) {
  const html = baseTemplate(`
    <span class="badge">New Booking Enquiry</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">New booking request received</h2>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Customer</span><span class="detail-value">${data.full_name}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span class="detail-value"><a href="tel:${data.phone}" style="color:#c9a84c;">${data.phone}</a></span></div>
      <div class="detail-row"><span class="detail-label">Email</span><span class="detail-value"><a href="mailto:${data.email}" style="color:#c9a84c;">${data.email}</a></span></div>
      <div class="detail-row"><span class="detail-label">Address</span><span class="detail-value">${data.address}</span></div>
      <div class="detail-row"><span class="detail-label">Vehicle</span><span class="detail-value">${data.vehicle_make} ${data.vehicle_model}</span></div>
      <div class="detail-row"><span class="detail-label">Service</span><span class="detail-value">${data.service}</span></div>
      <div class="detail-row"><span class="detail-label">Preferred Date</span><span class="detail-value">${data.preferred_date}</span></div>
      <div class="detail-row"><span class="detail-label">Preferred Time</span><span class="detail-value">${data.preferred_time}</span></div>
      ${data.notes ? `<div class="detail-row"><span class="detail-label">Notes</span><span class="detail-value">${data.notes}</span></div>` : ''}
    </div>
    <center><a class="btn" href="${SITE_URL}/admin/enquiries">View in Admin →</a></center>
  `, 'New Booking Enquiry — WCD Admin');

  return getResend().emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `🔔 New enquiry: ${data.full_name} — ${data.service}`,
    html,
  });
}

export async function sendEnquiryAcknowledgement(data: {
  full_name: string;
  email: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
}) {
  const html = baseTemplate(`
    <span class="badge">Request Received</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">Hi ${data.full_name},</h2>
    <p>Thank you for your booking request! We've received your enquiry and will be in touch within 24 hours to confirm your appointment.</p>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Service</span><span class="detail-value">${data.service}</span></div>
      <div class="detail-row"><span class="detail-label">Preferred Date</span><span class="detail-value">${data.preferred_date}</span></div>
      <div class="detail-row"><span class="detail-label">Preferred Time</span><span class="detail-value">${data.preferred_time}</span></div>
    </div>
    <p>No payment is required at this stage — we'll confirm everything over the phone or by email.</p>
    <p style="margin-top:16px;"><strong style="color:#f5f5f5;">Need to speak to us urgently?</strong></p>
    <center><a class="btn" href="tel:+447375759686">📞 07375 759686</a></center>
  `, 'Booking Request Received — WCD Detailing');

  return getResend().emails.send({
    from: FROM,
    to: data.email,
    subject: `Booking request received — WCD Detailing`,
    html,
  });
}

// ── Admin: New Booking Alert ─────────────────────────────────────────────────

export async function sendAdminNewBookingAlert(data: {
  bookingRef: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  scheduledDate: Date;
  services: string[];
  totalAmount: number;
  vehicleDescription: string;
}) {
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(data.scheduledDate));

  const html = baseTemplate(`
    <span class="badge">New Booking</span>
    <h2 style="color:#f5f5f5;margin:16px 0 8px;">New booking received</h2>
    <div class="detail-box">
      <div class="detail-row"><span class="detail-label">Reference</span><span class="detail-value">${data.bookingRef}</span></div>
      <div class="detail-row"><span class="detail-label">Customer</span><span class="detail-value">${data.customerName}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span class="detail-value">${data.customerPhone}</span></div>
      <div class="detail-row"><span class="detail-label">Email</span><span class="detail-value">${data.customerEmail}</span></div>
      <div class="detail-row"><span class="detail-label">Vehicle</span><span class="detail-value">${data.vehicleDescription}</span></div>
      <div class="detail-row"><span class="detail-label">Services</span><span class="detail-value">${data.services.join(', ')}</span></div>
      <div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">${dateStr}</span></div>
      <div class="detail-row"><span class="detail-label">Total</span><span class="detail-value">£${Number(data.totalAmount).toFixed(2)}</span></div>
    </div>
    <center><a class="btn" href="${SITE_URL}/admin/bookings">View in Admin →</a></center>
  `, 'New Booking Alert — WCD Admin');

  return getResend().emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `🔔 New booking: ${data.bookingRef} — ${data.customerName}`,
    html,
  });
}
