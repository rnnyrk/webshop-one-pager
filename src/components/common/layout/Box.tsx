import { cn } from 'utils';

export function Box({ className }: BoxProps) {
  return (
    <div
      className={cn('absolute min-w-[400px] min-h-[300px] rounded-xl bg-green-300', className)}
    ></div>
  );
}

type BoxProps = {
  className?: string;
};
