import Link from "next/link";
import { config } from "@site.config";

import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader: React.FC = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href="/" passHref>
          <a className="site-header__logo-link">
            <h4>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Chompy Developers' Blog
            </h4>
          </a>
        </Link>
        <div className="site-header__links">
          {config.headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith("/")) {
              return (
                <Link key={key} href={link.href} passHref>
                  <a className="site-header__link">{link.title}</a>
                </Link>
              );
            }
            return (
              <a key={key} href={link.href} className="site-header__link">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);
