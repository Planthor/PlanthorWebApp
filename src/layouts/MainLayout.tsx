import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div>
            <nav>Nav Bar</nav>
            <main>
                <header>Header</header>
                <div>{children}</div>
                <footer>Fotter</footer>
            </main>
        </div>
    );
}
