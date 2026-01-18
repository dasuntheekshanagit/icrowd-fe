import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <>
            <Link to="/" className="flex items-center gap-2">
                <div className="relative">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg p-1">
                        <img src="/logo.svg" alt="iCrowd logo" className="h-8 w-8"/>
                    </div>
                </div>
                <span className="text-xl font-bold font-display tracking-tight">
                <span className="text-foreground">i</span>
                <span className="text-accent">Crowd</span>
              </span>
            </Link>
        </>
    );
};
