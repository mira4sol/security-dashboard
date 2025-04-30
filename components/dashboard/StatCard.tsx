import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const statCardIconVariants = cva("h-10 w-10 bg-opacity-20 flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      funds: "bg-red-500 text-red-500",
      exploits: "bg-yellow-500 text-yellow-500",
      signature: "bg-blue-500 text-blue-500",
      audited: "bg-green-500 text-green-500",
    }
  },
  defaultVariants: {
    variant: "funds"
  }
});

export interface StatCardProps extends VariantProps<typeof statCardIconVariants> {
  title: string;
  value: string | number;
  icon: string;
  progress?: number;
  subtext?: string;
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  progress = 50, 
  subtext, 
  variant,
  className 
}: StatCardProps) => {
  return (
    <div className={cn("bg-card rounded-lg p-5 border border-border", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-3xl font-mono font-bold mt-2">{value}</p>
        </div>
        <div className={statCardIconVariants({ variant })}>
          <i className={icon}></i>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className={cn("h-1 rounded-full", {
              "bg-red-500": variant === "funds",
              "bg-yellow-500": variant === "exploits",
              "bg-blue-500": variant === "signature",
              "bg-green-500": variant === "audited"
            })} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {subtext && <p className="text-xs text-gray-400 mt-2">{subtext}</p>}
      </div>
    </div>
  );
};

export default StatCard;
