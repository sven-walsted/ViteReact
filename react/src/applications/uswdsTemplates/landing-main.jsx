import GovBanner from './gov-banner';
import LandingHeader from './landing-header';
import LandingMainHero from './landing-main-hero';
import LandingMainTagline from './landing-main-tagline';
import LandingMainEncourageAction from './landing-main-encourage-action';
import LandingFooterPrimary from "./landing-footer-primary"
import LandingFooterSecondary from "./landing-footer-secondary"
import LandingIdentifier from './landing-identifier';
import LandingGraphicList from './landing-graphic-list';

export default function LandingMain() {
    return (
        <>
            <a className="usa-skipnav" href="#main-content">Skip to main content</a>
            <GovBanner />
            <LandingHeader />
            <div className="usa-overlay"></div>
            <main id="main-content">
                <LandingMainHero />
                <LandingMainTagline />
                <LandingGraphicList />
                <LandingMainEncourageAction />
            </main>
            <footer className="usa-footer">
                <div className="grid-container usa-footer__return-to-top">
                    <a href="#">Return to top</a>
                </div>
                <LandingFooterPrimary />
                <LandingFooterSecondary />
            </footer>
            <LandingIdentifier />
        </>
    )
}