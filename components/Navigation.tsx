"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  ArrowRightLeft,
  BarChart3,
  CircleUserRound,
  Grip,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import AccountDisplay from "./AccountDisplay";
import { Separator } from "./ui/separator";

const Navigation = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const links = [
    { name: "Overview", href: "/", icon: Grip },
    { name: "Transactions", href: "/transactions", icon: ArrowRightLeft },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Account", href: "/account", icon: CircleUserRound },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={5}>
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel
          defaultSize={265}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            isCollapsed &&
            "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <aside
            data-collapsed={isCollapsed}
            className="group flex flex-col min-h-screen gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              <div
                className={cn(
                  "flex h-[52px] items-center justify-center",
                  isCollapsed ? "h-[52px]" : "px-2",
                )}
              >
                <AccountDisplay isCollapsed={isCollapsed} />
              </div>
              <Separator />
              {links.map((link) =>
                isCollapsed ? (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          buttonVariants({
                            variant:
                              pathname === link.href ? "default" : "ghost",
                            size: "icon",
                          }),
                          "h-9 w-9",
                          pathname === link.href &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        <span className="sr-only">{link.name}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.name}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={cn(
                      buttonVariants({
                        variant: pathname === link.href ? "default" : "ghost",
                        size: "sm",
                      }),
                      pathname === link.href &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                      "justify-start",
                    )}
                  >
                    {<link.icon className="mr-2 h-4 w-4" />}
                    {link.name}
                  </Link>
                ),
              )}
            </nav>
          </aside>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <ScrollArea className="h-screen w-full">{children}</ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default Navigation;
