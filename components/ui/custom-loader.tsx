import { cn } from "@/lib/utils"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function CustomLoader({ size = "md", className, ...props }: LoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  }

  return (
    <div className="flex items-center justify-center" {...props}>
      <div
        className={cn(
          "rounded-full animate-loader-spin",
          "border-custom-taupe border-t-custom-brown",
          "relative",
          sizeClasses[size],
          className,
        )}
      >
        <div
          className="absolute inset-0 rounded-full border-t-custom-tan border-r-custom-cream opacity-75"
          style={{ borderWidth: "inherit" }}
        />
      </div>
    </div>
  )
}
