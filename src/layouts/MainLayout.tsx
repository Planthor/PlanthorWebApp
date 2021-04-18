import React, { ReactNode } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div>
            <NavigationBar />
            <main>
                <div>{children}</div>
            </main>
            <footer>Footer</footer>
        </div>
    );
}
