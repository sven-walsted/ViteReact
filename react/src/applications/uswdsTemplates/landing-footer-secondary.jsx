import logoImg from '@uswds/uswds/img/logo-img.png';
import facebookIcon from '@uswds/uswds/img/usa-icons/facebook.svg';
import twitterIcon from '@uswds/uswds/img/usa-icons/twitter.svg';
import youtubeIcon from '@uswds/uswds/img/usa-icons/youtube.svg';
import instagramIcon from '@uswds/uswds/img/usa-icons/instagram.svg';
import rssFeedIcon from '@uswds/uswds/img/usa-icons/rss_feed.svg';

export default function LandingFooterSecondary() {
    return (
        <div className="usa-footer__secondary-section">
            <div className="grid-container">
                <div className="grid-row grid-gap">
                    <div
                        className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
                    >
                        <div className="mobile-lg:grid-col-auto">
                            <img
                                className="usa-footer__logo-img"
                                src={logoImg}
                                alt=""
                            />
                        </div>
                        <div className="mobile-lg:grid-col-auto">
                            <p className="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
                        </div>
                    </div>
                    <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                        <div className="usa-footer__social-links grid-row grid-gap-1">
                            <div className="grid-col-auto">
                                <a className="usa-social-link" href="javascript:void(0);"
                                ><img
                                        className="usa-social-link__icon"
                                        src={facebookIcon}
                                        alt="Facebook"
                                    /></a>
                            </div>
                            <div className="grid-col-auto">
                                <a className="usa-social-link" href="javascript:void(0);"
                                ><img
                                        className="usa-social-link__icon"
                                        src={twitterIcon}
                                        alt="Twitter"
                                    /></a>
                            </div>
                            <div className="grid-col-auto">
                                <a className="usa-social-link" href="javascript:void(0);"
                                ><img
                                        className="usa-social-link__icon"
                                        src={youtubeIcon}
                                        alt="YouTube"
                                    /></a>
                            </div>
                            <div className="grid-col-auto">
                                <a className="usa-social-link" href="javascript:void(0);"
                                ><img
                                        className="usa-social-link__icon"
                                        src={instagramIcon}
                                        alt="Instagram"
                                    /></a>
                            </div>
                            <div className="grid-col-auto">
                                <a className="usa-social-link" href="javascript:void(0);"
                                ><img
                                        className="usa-social-link__icon"
                                        src={rssFeedIcon}
                                        alt="RSS"
                                    /></a>
                            </div>
                        </div>
                        <p className="usa-footer__contact-heading">
                            &lt;Agency Contact Center&gt;
                        </p>
                        <address className="usa-footer__address">
                            <div className="usa-footer__contact-info grid-row grid-gap">
                                <div className="grid-col-auto">
                                    <a href="tel:1-800-555-5555">&lt;(800) 555-GOVT&gt;</a>
                                </div>
                                <div className="grid-col-auto">
                                    <a href="mailto:info@agency.gov">&lt;info@agency.gov&gt;</a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}