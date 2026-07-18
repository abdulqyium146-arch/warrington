'use client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  bookings: number;
}

function tickFmt(v: number) {
  return v >= 1000 ? `£${(v / 1000).toFixed(0)}k` : `£${v}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const revenue: number = payload[0]?.value ?? 0;
  return (
    <div className="bg-brand-darkgray border border-brand-gray/50 rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="text-brand-white font-semibold mb-1">{label}</p>
      <p className="text-brand-gold">£{revenue.toFixed(2)}</p>
    </div>
  );
}

export function RevenueChart({ data }: { data: RevenueDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c9a84c" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#c9a84c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: '#9ca3af', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#9ca3af', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={tickFmt}
          width={44}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#c9a84c', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#c9a84c"
          strokeWidth={2}
          fill="url(#goldFill)"
          dot={{ fill: '#c9a84c', strokeWidth: 0, r: 3 }}
          activeDot={{ r: 5, fill: '#c9a84c', strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
