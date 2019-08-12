import React, { Component } from "react";

import { RunfinityFooter } from "../components/Footer.js";
import { RunfinityNavbar } from "../components/Navbar.js";
import { Jumbotron, Container } from "reactstrap";

import "../css/legal.css";
import "../images/logo.png";

export class Privacy extends Component {
  render() {
    return (
      <div>
        <div>
          <RunfinityNavbar />
        </div>

        <div class="article-con">
          <Jumbotron fluid className="jumbotron">
            <Container fluid className="container" id="view-legal">
              <div class="row">
                <div class="col-lg-3 col-md-3" id="legal-navigation">
                  <ul id="legal-nav-items">
                    <li>
                      <a className="legal-link" href="/legal">
                        Legal Disclaimer
                      </a>
                    </li>
                    <li>
                      <a className="legal-link" href="/tos">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="legal-link selected" href="/privacy">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <article class="col-lg-7 col-md-9" id="legal-body">
                  <h2>Runfinity Privacy Policy</h2>
                  <p class="effective-date">Effective Date: 03 February 2019</p>
                  <section class="legal-use-of-website section-border">
                    <h3>Introduction</h3>
                    <p>
                      Your privacy is very important to us. Please read below to
                      see how Runfinity handles information in connection with
                      Runfinity's website and the related mobile application.
                    </p>
                    <p>
                      As Students we have studied about privacy and the
                      importance of the protection of Member Data. Being able to
                      learn from the mistakes of the scandles before us, before
                      we get to the details, here are a few of our fundamental
                      privacy principles:
                    </p>
                    <ul>
                      <li>
                        We do not sell your Member Data to any third-party
                        service, or company.
                      </li>
                      <li>
                        We give you several ways to control what information is
                        shared with others and are continuously working to
                        enhance privacy options.
                      </li>
                    </ul>
                    <p>
                      Our privacy policy (the "Privacy Policy") explains the
                      information we collect, how we use and share it. Please
                      also read our <a href="/tos">Terms of Service</a> which
                      outlines the terms governing the Services.
                    </p>
                    <p>
                      This policy was written in English. Unless indicated
                      otherwise, this Privacy Policy does not apply to third
                      party products or services or the practices of companies
                      that we do not own or control, including other companies
                      you might interact with on or through the Services (e.g.,
                      Facebook, Google Play Services).
                    </p>
                    <p>
                      Changes or updates to the content of this site may occur
                      without notice. Questions or comments about this Privacy
                      Policy may be submitted by e-mail.
                    </p>
                  </section>
                  <section class="collect-use-share section-border">
                    <h3>We Collect, Use, and Process Information.</h3>
                    <p>
                      Any time you apply for beta access to Runfinity, you are
                      making an offer to Runfinity to be apart of the
                      closed-beta. Runfinity may accept or decline that offer in
                      its sole and absolute discretion. Notwithstanding that
                      Runfinity may respond to an enquiry, approved access will
                      not be considered accepted until Runfinity dispatches the
                      product and supplies the required details of the service.
                    </p>
                    <ul>
                      <li>
                        as necessary to provide the Services and fulfill our
                        obligations pursuant to the{" "}
                        <a href="/tos">Terms of Service</a>. For example, we
                        cannot provide the Services unless we collect, use and
                        process your location information;
                      </li>
                      <li>where you have consented to the processing;</li>
                      <li>
                        where necessary to comply with a legal obligation, a
                        court order, or to exercise and defend legal claims;
                      </li>
                      <li>
                        to protect your vital interests, or those of others,
                        such as in case of emergencies;
                      </li>
                      <li>where you have made the information public; and</li>
                      <li>
                        where necessary for the purposes of Runfinity's
                        University interests, such as Runfinity's interest in
                        collaborating with our members, and our commercial
                        interests in ensuring the sustainability of the
                        Services.
                      </li>
                    </ul>
                  </section>
                  <section class="collect-use-share section-border">
                    <h3>Information Runfinity Collects</h3>
                    <p>
                      Runfinity collects information about you, including
                      information that directly or indirectly identifies you, if
                      you choose to share it with Runfinity. We receive
                      information in different ways, including when you start,
                      end, complete or upload activities using the Services.
                    </p>
                    <ul>
                      <li>
                        We collect account information such as your name, email
                        address, date of birth, gender, username and password
                        that helps secure and provide access to our Services.
                      </li>
                      <li>
                        Profile, activity and use information is collected about
                        you when you choose to share an activity (including
                        date, time, static geo-location information as well as
                        your in-activity statistics), when you level up your
                        account, gain experience, or otherwise general use of
                        the Services.
                      </li>
                      <li>
                        Runfinity collects information from devices and apps you
                        connect to Runfinity. For example, you may connect your
                        Wear OS watch to Runfinity and information from these
                        devices will be passed between Runfinity.
                      </li>
                      <li>
                        Runfinity may collect or infer health information.
                        Certain health information may be inferred from sources
                        such as heart rate or other information about your
                        perceived exertion, including cadence, height and weight
                        or toher indications.
                      </li>
                      <li>
                        We collect and process location information when you
                        sign up for and use the Services. For example, to record
                        your run and to provide you with your training
                        statistics and inclusion in the Service's features (for
                        example, overall distance goals), it is necessary to
                        collect and record the physical location of your device
                        including, data such as speed and direction.
                      </li>
                      <li>
                        where necessary for the purposes of Runfinity's
                        University interests, such as Runfinity's interest in
                        collaborating with our members, and our commercial
                        interests in ensuring the sustainability of the
                        Services.
                      </li>
                    </ul>
                  </section>
                </article>
              </div>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <RunfinityFooter />
        </div>
      </div>
    );
  }
}
