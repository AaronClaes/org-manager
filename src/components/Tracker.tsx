import { cn } from "@/utils/tailwind";
import { Text, Tooltip } from "@mantine/core";

type TrackerProps = {
  label?: string;
  data: { type: string }[];
  series: Record<string, { label: string; color: string }>;
};

export default function Tracker({ label, data, series }: TrackerProps) {
  return (
    <>
      {label && <Text size="sm">{label}</Text>}
      <div className="first: flex gap-[4px]">
        {data.map((item, i) => {
          const itemProperties = series[item.type];
          if (!itemProperties) return null;
          return (
            <Tooltip key={i} label={itemProperties.label}>
              <div
                style={{ backgroundColor: itemProperties.color }}
                className={cn(
                  "h-8 w-full min-w-1 rounded-[2px]",
                  i === 0 && "rounded-l-md",
                  i === data.length - 1 && "rounded-r-md",
                )}
              />
            </Tooltip>
          );
        })}
      </div>
    </>
  );
}
