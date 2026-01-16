import type {ReactNode} from "react";

interface ContactItemProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

export function ContactItem({ icon, title, children }: ContactItemProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                {children}
            </div>
        </div>
    );
}
