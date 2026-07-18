'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export interface StatusDataPoint {
  status: string;
  count: number;
}

const STATUS_COLORS: Record<string, string> = {
  PENDING: '#f59e0b',
  CONFIRMED: '#3b82f6',
  IN_PROGRESS: '#a855f7',
  COMPLETED: '#22c55e',
  CANCELLED: '#ef4444',
  NO_SHOW: '#6b7280',
};

const STATUS_LABELS: Record<string, string> = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
  NO_SHOW: 'No Show',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item: StatusDataPoint = payload[0]?.payload;
  if (!item) return null;
  return (
    <div className="bg-brand-darkgray border border-brand-gray/50 rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="text-brand-white font-semibold">{STATUS_LABELS[item.status] ?? item.status}</p>
      <p className="text-gray-400">{item.count} booking{item.count !== 1 ? 's' : ''}</p>
    </div>
  );
}

export function StatusChart({ data }: { data: StatusDataPoint[] }) {
  const filtered = data.filter((d) => d.count > 0);

  if (filtered.length === 0) {
    return (
      <div className="h-[220px] flex items-center justify-center">
        <p className="text-gray-500 text-sm">No booking data yet</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={filtered}
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={78}
            paddingAngle={2}
            dataKey="count"
          >
            {filtered.map((entry) => (
              <Cell key={entry.status} fill={STATUS_COLORS[entry.status] ?? '#6b7280'} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center">
        {filtered.map((d) => (
          <div key={d.status} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: STATUS_COLORS[d.status] ?? '#6b7280' }}
            />
            <span className="text-xs text-gray-400">{STATUS_LABELS[d.status] ?? d.status}</span>
            <span className="text-xs text-gray-600">({d.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
