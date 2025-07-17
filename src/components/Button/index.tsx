import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../theme/lib/utils"

/**
 * 按钮变体样式配置
 * @private
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        borderNone: "border-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button 组件的属性类型
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>} 继承原生按钮属性
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * 现代化的按钮组件，支持多种变体和尺寸。
 * 
 * @component
 * @example
 * ```tsx
 * // 默认按钮
 * <Button>Click me</Button>
 * 
 * // 带变体的按钮
 * <Button variant="destructive" size="lg">Delete</Button>
 * 
 * // 图标按钮
 * <Button variant="ghost" size="icon">
 *   <IconComponent />
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - 组件属性
 * @param {string} [props.variant="default"] - 按钮变体样式
 *   - 'default' - 主要按钮
 *   - 'destructive' - 危险操作按钮
 *   - 'outline' - 轮廓按钮
 *   - 'secondary' - 次要按钮
 *   - 'ghost' - 幽灵按钮
 *   - 'link' - 链接样式按钮
 * @param {string} [props.size="default"] - 按钮尺寸
 *   - 'default' - 默认大小
 *   - 'sm' - 小型按钮
 *   - 'lg' - 大型按钮
 *   - 'icon' - 图标按钮
 * @param {string} [props.className] - 自定义类名
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    console.log('>>>>> button props >>> ', props)
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

export default Button;