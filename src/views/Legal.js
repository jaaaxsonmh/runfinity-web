import React, { Component } from "react";

import { RunfinityFooter } from "./components/Footer.js";
import { RunfinityNavbar } from "./components/Navbar.js";
import { Jumbotron, Container } from "reactstrap";
import "./css/legal.css";
import "./images/logo.png";

export class Legal extends Component {
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
                      <a className="legal-link selected" href="/legal">
                        Legal Disclaimer
                      </a>
                    </li>
                    <li>
                      <a className="legal-link" href="/tos">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="legal-link" href="/privacy">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <article class="col-lg-7 col-md-9" id="legal-body">
                  <h2>Runfinity Legal Disclaimer</h2>
                  <p class="effective-date">Effective Date: 02 November 2019</p>
                  <section class="legal-use-of-website section-border">
                    <h3>
                      Terms and conditions for use of website and application
                    </h3>
                    <p>
                      Runfinity welcomes you to our website. By viewing the
                      pages of this website, you acknowledge that you have read
                      and accepted these terms and conditions.
                    </p>
                    <p>
                      The information provided in this site is based on
                      information supplied by Runfinity, and is intended only as
                      an introduction and guide to Runfinity and the range of
                      available products and services
                    </p>
                    <p>
                      While every endeavour has been made to supply accurate
                      information, we are students and errors may occur.
                      Accordingly, Runfinity does not accept any liability for
                      any loss or damage which may indirectly or directly result
                      from any advice, opinion, information, whether negligent
                      or otherwise, contained on the Runfinity products.
                    </p>
                    <p>
                      Changes or updates to the content of this site may occur
                      without notice. Although major updates that could
                      interrupt your usage of this site (Maintainence and
                      scheduled off-line time) will be alerted ahead of time.
                    </p>
                  </section>
                  <section class="acceptance-into-beta section-border">
                    <h3>Acceptance into beta</h3>
                    <p>
                      Any time you apply for beta access to Runfinity, you are
                      making an offer to Runfinity to be apart of the
                      closed-beta. Runfinity may accept or decline that offer in
                      its sole and absolute discretion. Notwithstanding that
                      Runfinity may respond to an enquiry, approved access will
                      not be considered accepted until Runfinity dispatches the
                      product and supplies the required details of the service.
                    </p>
                  </section>
                  <section class="jurisdiction section-border">
                    <h3>Jurisdiction</h3>
                    <p>
                      This website is governed by, and is to be interpreted in
                      accordance with, the laws of New Zealand.
                    </p>
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
