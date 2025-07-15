'use client';

// --- React ---
import React from 'react';
// --- Components ---
import Header from '@/components/Header';
import OtgFooter from '@/components/OtgFooter';

interface NavLink {
  label: string;
  href: string;
  target?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  navLinks?: NavLink[];
  showHeader?: boolean;
  showFooter?: boolean;
  headerDarkLinks?: boolean;
  headerShowBadge?: boolean;
  containerClassName?: string;
  contentClassName?: string;
  headerLogoUrl?: string;
  headerLogoWidth?: number | string;
  headerLogoHeight?: number | string;
}

export default function PageLayout({
  children,
  headerClassName = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerClassName = '',
  navLinks = [],
  showHeader = true,
  showFooter = true,
  headerDarkLinks = false,
  headerShowBadge = false,
  containerClassName = '',
  contentClassName = '',
  headerLogoUrl,
  headerLogoWidth,
  headerLogoHeight,
}: PageLayoutProps) {
  return (
    <div className={`main-container ${containerClassName}`}>
      {showHeader && (
        <Header
          className={headerClassName}
          navLinks={navLinks}
          darkLinks={headerDarkLinks}
          showBadge={headerShowBadge}
          logoUrl={headerLogoUrl}
          logoWidth={headerLogoWidth}
          logoHeight={headerLogoHeight}
        />
      )}
      <main className={`main-content ${contentClassName}`}>{children}</main>
      {showFooter && <OtgFooter />}
    </div>
  );
}
