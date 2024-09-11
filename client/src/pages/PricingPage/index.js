import React from 'react';
import Header from '../../components/Header/Header.js';
import PricingBox from '../../components/PricingBox';
import CONSTANTS from '../../constants';
const {PRICING_COLORS} = CONSTANTS;

const PricingPage = () => {
    return (
        <>
        <Header />
        <main>
            <section>
                <p>Pricing For 
                    <select>
                        <option>Name</option>
                        <option>Tagline</option>
                        <option>Logo</option>
                    </select></p>
            </section>
            <section>
                <PricingBox 
                    color={PRICING_COLORS.BRONZE}
                    header="BRONZE"
                    tagline="Branding on a budget"
                    price="797">
                        <p>Includes 3 Contests (Name, Logo, Tagline)</p>
                        <p>Prize to Winner - $405 ($135 for Name, $135 for Logo, $135 for Tagline) (Included)</p>
                        <p>Validation Services & Upgrades ($39 value)
                            <ul>
                                <li> Matching .com URL</li>
                            </ul>
                        </p>
                        <p>Expected Entries , 300+ Name, 30+ Logo, 100+ Tagline</p>
                        <p>By bundling your name, tagline, and logo project you save $100 off the standard price of $897.</p>
                </PricingBox>
                <PricingBox 
                 color={PRICING_COLORS.GOLD}
                 header="GOLD"
                 tagline="More privacy and Trademark support"
                 price="1247"
                    >
                        <p>Includes 3 Contests (Name, Logo, Tagline)</p>
                        <p>Prize to Winner - $625 ($200 for Name, $225 for Logo, $200 for Tagline) (Included)</p>
                        <p>Validation Services & Upgrades ($838 value)
                            <ul>
                                <li> Matching .com URL</li>
                                <li> Instant Trademark Check (One Database)</li>
                                <li> NDA and More Privacy</li>
                                <li> Project Promotion (Basic)</li>
                                <li> Comprehensive Trademark Research (1 Name, 1 Tagline)</li>
                            </ul>
                        </p>
                        <p>Expected Entries , 600+ Name, 50+ Logo, 200+ Tagline</p>
                        <p>Partial Refund Option</p>
                        <p>By bundling your name, tagline, and logo project you save $200 off the standard price of $1,347.</p>
                </PricingBox>
            </section>
        </main>
        </>
    );
}

export default PricingPage;
