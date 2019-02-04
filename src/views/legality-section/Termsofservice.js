import React, { Component } from "react";

import { RunfinityFooter } from "../components/Footer.js";
import { RunfinityNavbar } from "../components/Navbar.js";
import { Jumbotron, Container } from "reactstrap";
import { BackButton } from "../components/backtotop.js";

import "../css/legal.css";
import "../images/logo.png";

export class Tos extends Component {
  render() {
    return (
      <div>
        <div>
          <RunfinityNavbar />
        </div>
        <div class="article-con">
          <Jumbotron fluid className="jumbotron">
            <Container fluid className="container" id="view-legal">
              <BackButton />
              <div class="row">
                <div class="col-lg-3 col-md-3" id="legal-navigation">
                  <ul id="legal-nav-items">
                    <li>
                      <a className="legal-link" href="/legal">
                        Legal Disclaimer
                      </a>
                    </li>
                    <li>
                      <a className="legal-link selected" href="/tos">
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
                  <h2>Runfinity Terms and Conditions</h2>
                  <p class="effective-date">Effective Date: 02 February 2019</p>
                  <section class="highlights section-border">
                    <h3>Introduction</h3>
                    <p>
                      Welcome to Runfinity. We want you to know and understand
                      your rights and our rights relating to the Services.
                      Please review them carefully. Here is a few highlights:
                    </p>
                    <ul>
                      <li>
                        Your privacy is important to us. See how we collect and
                        use your personal information in our{" "}
                        <a className="legal-link" href="/privacy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a className="legal-link" href="#cancellation">
                          Runfinity is not guaranteed to leave closed-beta, and
                          may be stopped at any time.
                        </a>
                      </li>
                      <li>
                        <a className="legal-link" href="#content">
                          You are the owner of your content, but give us a right
                          to use it.
                        </a>
                      </li>
                      <li>
                        <a className="legal-link" href="#conduct">
                          We expect members to act with respect and at any time
                          we can cancel your account if you act inappropriately.
                        </a>
                      </li>

                      <li>
                        <a className="legal-link" href="#liability">
                          Runfinity is not liable for your activities and no
                          warranties will be made by Runfinity.
                        </a>
                      </li>
                      <li>
                        <a className="legal-link" href="#access">
                          Runfinity is able to shut down and close the service
                          at any time, without any notice to closed-beta
                          members.
                        </a>
                      </li>

                      <li>
                        <a className="legal-link" href="#goodfaith">
                          Rufninity is a university project and we hope you
                          contribute in good faith.
                        </a>
                      </li>

                      <li>
                        <a className="legal-link" href="#feedback">
                          Feedback is critically important to us, and you allow
                          us to use it.
                        </a>
                      </li>
                      <li>
                        <a className="legal-link" href="#help">
                          We are easily reachable if you have questions or need
                          help
                        </a>
                      </li>
                    </ul>
                  </section>
                  <section class="section-border" id="tos ">
                    <h3>Terms of Service</h3>
                    <p>
                      The Runfinity website, and related mobile applications
                      (collectively, the "Services") are made available to you
                      by Runfinity, Inc. You agree to comply with these terms
                      and any terms provided in addition which Runfinity makes
                      available to you on the Services whcih shall form part of
                      the Terms.
                    </p>
                    <p class="text-uppercase">
                      by accessing, using or uploading or downloading any
                      information or materials to or from the services, or by
                      indicating your agreement to these terms by requesting to
                      access closed-beta, clicking "request access" or any
                      similar mechanism of contac, you are agreeing to these
                      terms. if you do not agree to these terms, do not access
                      or attempt to access the services.
                    </p>
                    <p>
                      If you access or use the Services on behalf of a
                      registered individual or other entity, you represent that
                      you have authority to bind such entity to these Terms and
                      that it is fully binding on them. In such case, the term
                      "you" will refer to such entity and its affiliates. If you
                      do not have authority, you may not access or use the
                      Services.
                    </p>
                    <p>
                      {" "}
                      The Runfinity Services cannot be provided and the
                      agreement described in these Terms of Service cannot be
                      performed without Runfinity processing data about you, and
                      other Runfinity members, including your location data.
                      Processing of the data you share with Runfinity, including
                      location data, is essential to the Services which we
                      provide.
                    </p>
                  </section>
                  <section
                    class="section-border"
                    id="registration-and-accounts"
                  >
                    <h3>Registration and Accounts</h3>
                    <p>
                      The Services are intended solely for persons who are 18
                      years old or such higher age required in your country to
                      use the Services. If you are under the legal age to form a
                      binding contract in the jurisdiction of New Zealand, you
                      represent that your parent or legal guardian has reviewed
                      and agreed to these Terms on your behalf. Services will be
                      denied to those of unsound mind or people for whom the
                      Court has made a order or personal order that provides
                      that someone else is representing on your behalf.
                    </p>
                    <p>
                      To use the Services, you must apply to register. You agree
                      to: (a) provide true, accurate, current and complete
                      information about yourself ("Member Data") and (b)
                      maintain and prompty update the Member Data. You agree
                      that Runfinity may use your Member Data to provide
                      Services that you access or use and as otherwise set forth
                      in these Terms. If you provide any Member Data that is
                      inaccurate or not current, or Runfinity has reasonable
                      grounds to suspect that such Member Data is inaccurate or
                      not current, Runfinity has the right to terminate or
                      suspend your account and refuse current or future use of
                      the Services.
                    </p>
                    <p>
                      You are solely responsilbe for maintaining the
                      confidentiality of the password associated with your
                      account and for restricting access to your password, your
                      computer and mobile device while logged into the Services.
                      You accept responsibility for all activities that occur
                      under your account or from your computer and mobile
                      device. We cannot, guarantee absolute security of your
                      account, your Content (as defined below) or the personal
                      information you provide, and we cannot promise that our
                      security measures will prevent hackers from illegally
                      accessing the Services or its contents. You agree to
                      immediately notify Runfinity of any unauthorized use of
                      your account, or password, or any other security breach,
                      and confirm that you understand all risks of unauthorized
                      access to Member Data.
                    </p>
                    <p>
                      You may register for or log-in to your account via a
                      third-part network, such as Facebook and Google. If you do
                      so, you hereby authorize Runfinity to pre-populate the
                      registration and other relevant information fields of your
                      account. If you connect your account bia a third-party
                      network, you agree to comply with the terms and conditions
                      and policies to such third party.
                    </p>
                    <p>
                      By using Services you hereby agree to be bound by the{" "}
                      <a href="https://maps.google.com/help/terms_maps.html">
                        Google Maps Additional Terms of Service
                      </a>{" "}
                      including the{" "}
                      <a href="https://policies.google.com/privacy">
                        {" "}
                        Google Privacy Policy
                      </a>{" "}
                      in connection with your use of Runfinity Services.
                    </p>
                  </section>
                  <section class="section-border" id="cancellation">
                    <h3>Cancellation of Participation</h3>
                    <p>
                      If you signed up on Runfinity.co.nz, you cancel your
                      membership by visiting your "Account" page and selecting
                      "Opt-out of Beta". If you signed up through the Google
                      Play store, you may delete the application and any
                      corresponding data held on the application by uninstalling
                      it through your mobile device. At any time you can contact
                      us at our email jackhosking2@outlook.com. When your
                      cancellation is processed, your account will remain for 3
                      months before all Member Data will be deleted off our
                      servers.
                    </p>
                    <p>
                      After cancellation of your closed-beta account you may
                      re-apply to regain access to your account, although
                      Runfinity withholds the right to decline or accept your
                      appliciton into the beta as outlined in{" "}
                      <a href="/legal">Legal Disclaimer</a>
                    </p>
                    <p>
                      If you are reaccpted into the closed-beta participation
                      you hold the ability to restore your previous Member Data
                      (within 3 month deletion threshold) or for your previous
                      Member Data to be deleted. If you re-join the closed beta
                      after the 3 months period
                    </p>
                  </section>
                  <section class="section-border" id="content">
                    <h3>Member Conduct and Content</h3>
                    <h4>Content</h4>
                    <p>
                      You agree that Runfinity is not responsible for, and does
                      not endorse, Content posted on the Services. If your
                      Content violates these Terms, you may bear legal
                      responsibility for that Content. As between you and
                      Runfinity, any Content will be non-confidential and
                      non-proprietary and we will not be liable for any use or
                      disclosure of Content. You acknowledgeand agree that your
                      relationship with Runfinity is not confidential.
                    </p>
                    <p>
                      The Services may provide you with the ability to mark
                      certain Content that you submit to the Services as
                      private, public, or available only to select users of the
                      Services. Runfinity will maintain the privacy of such
                      Content in accordance with your elections. However, you
                      are responsible for the public nature of the content.
                    </p>
                    <p>
                      You give us permission to use your profile name, profile
                      photo, and information about your activities and actions
                      you have taken, including your use of third party
                      products, services or devices on the Runfinity service
                      without compensation to you. You may adjust settings to
                      prevent your profile name and profile photo from appearing
                      in an ad.
                    </p>
                    <h4 id="conduct">Conduct</h4>
                    <p>
                      You may not modify, copy, distribute, transmit, display,
                      perform, reproduct, publish, license, create derivative
                      works from, transfer or sell for any commercial purposes
                      any portion of the Services, use of the Services or access
                      to Content. You may not use the Services, or assist or
                      encourage any other party, to engage in any of the
                      following Prohibited Activities:
                    </p>
                    <ul>
                      <li>
                        Accessing the Services to monitor its availability,
                        performance, or functionality;
                      </li>
                      <li>
                        Permitting any third party to access the Services;
                      </li>
                      <li>
                        Using, copying, modifying, creating a derivative work
                        of, reverse engineering, decompiling, or otherwise
                        attempting to extract the source code of the software
                        underlying the Services or any part thereof, unless
                        expressly permitted but not without providing prior
                        written notice to Runfinity;
                      </li>
                      <li>
                        Distributing, or disclosing any part of the Services in
                        any mdeium.
                      </li>
                      <li>
                        Publishing, transmitting, distributing, or storing
                        content, material, information or data that is illegal,
                        obscene, defamatory, threatening, harassing, abusive or
                        hateful or that incites violence.
                      </li>
                      <li>
                        Interfering with the Services networks, equipment,
                        applications, services or websites (e.g., viruses,
                        Trojan horses, etc.).
                      </li>
                      <li>
                        Collecting of harvesting any information relating to an
                        identified or identifiable individual, including account
                        names and information about users of the Services, from
                        the Services;
                      </li>
                      <li>
                        Taking any action that imposes, or may impose, at our
                        sole discretion, an unreasonable or disproportionately
                        large load on Runfinity infrastructure;
                      </li>
                      <li>
                        Using the Services for any inappropriate purposes;
                      </li>
                      <li>
                        Submitting to the Services or to Runfinity any
                        personally identifiable information, except as necessary
                        for the creation and operation of your account;
                      </li>
                      <li>
                        Removing any copyright, trademark or other proprietary
                        rights notices;
                      </li>
                      <li>
                        Bypassing the measures we may use to prevent or restrict
                        access to the Services, including, without limitation,
                        features that prevent or restrict use or enforce
                        limitations on use of the Services or the content
                        therein;
                      </li>
                      <li>
                        Executing any form of network monitoring or other
                        technology to intercept, decode, mine or display any
                        packets used to communicate between the Service's
                        servers or any data not intended for you.
                      </li>
                    </ul>
                    <p>
                      You represent and warrant that you are authorized to
                      create your account, the posting and use of your Content
                      on or through the Services does not and will not violate,
                      on the rights of any third party, including without
                      limitation, privacy and data protection rights, publicity
                      rights, copyrights, trademakrs and intellectual property
                      rights.
                    </p>
                  </section>
                  <section class="section-border" id="content">
                    <h3>Interactions with Members</h3>
                    <p>
                      The Services function as a venue to connect and compete
                      with members in a virtual information place. As a neutral
                      facilitator, Runfinity is not directly involved in the
                      actual interactions between members of the Services.
                      Although Runfinity employees are hereby allowed to connect
                      with members in the same manner non-employees can connect.
                    </p>
                    <p>
                      Runfinity shall have no responsibility to confirm the
                      identity of members. Runfinity shall also have no
                      responsibility to confirm or verify the qualifications,
                      background, or abilities or members. You shall at all time
                      exercise common sense when interacting with any member of
                      the Services.
                    </p>
                  </section>

                  <section class="section-border" id="liability">
                    <h3>Disclaimer of Warranties and Liability</h3>
                    <p>
                      Runfinity, and any third-party content providers, provides
                      the Service and the information stored on the database(s)
                      made available on the Service on an AS IS, AS AVAILABLE
                      and WITH ALL FAULTS basis, and makes no express or implied
                      warranties regarding the use or performance of the Service
                      or database information. Runfinity disclaims any and all
                      implied warranties of title, merchantability, fitness for
                      a particular purpose or use, or noninfringement. Runfinity
                      will not be liable for any (a) special, incidental,
                      indirect, or consequential damages; (b) any other claim in
                      connection with this Agreement or in connection with the
                      Service. In no event will Runfinity be liable for loss of
                      data, or the interruption of your business or the Service.
                      Runfinity will not be liable for any delay in accessing
                      and/or inability to access the Service whether due to an
                      act of God, action by governmental entity, strike, network
                      difficulty, electronic malfunction, etc., or any
                      reliability or effectiveness related to the Service. In no
                      event will Runfinity be liable for any failure,
                      disruption, downtime, interruption, delay, inaccuracy, or
                      any other nonperformance related to the Service. Runfinity
                      make no warranty or representation that the operation of
                      the Service will be uninterrupted or error-free. Because
                      some jurisdictions do not allow the exclusion or
                      limitation of liability for consequential or incidental
                      damages, the above limitations may not apply to you.
                      Runfinity liability to you for actual damages for any
                      cause whatsoever, and regardless of the form of action
                      (whether in contract, tort (including negligence), product
                      liability or otherwise), will be limited to the
                      Subscription Fee paid for the month in which the claim
                      arose.
                    </p>
                  </section>
                  <section class="section-border" id="access">
                    <h3>Disclaimer of Access</h3>
                    <p>
                      Runfinity, is a university project and should be treated
                      as such. The last day for access to Runfinity closed-beta
                      will be 21st June 2019, after this date there may be no
                      further updates issued and contact with the Runfinity team
                      may hault.
                    </p>
                    <p>
                      Access to the Website may go offline when the domain
                      ownership and hosting is expired. Access to the Runfinity
                      application may still be available until Runfinity is
                      uninstalled from your mobile device. Although, Runfinity
                      Services may hault and storing and retrieving of data may
                      not be available.
                    </p>
                    <p>
                      Runfinity withholds the right to delete all Member Data
                      stored, after the above described date. Before this date
                      if you wish to have access to your Member Data, including
                      but not limited to, statistic history, GPS location
                      history, and general Member Data contact must be made to
                      the Runfinity team before the proposed closing date to
                      export data to a spreadsheet for your access.
                    </p>
                  </section>
                  <section class="section-border" id="goodfaith">
                    <h3>Participate in Good Faith</h3>
                    <p>Please contribute in goodfaith.</p>
                  </section>
                  <section class="section-border" id="feedback">
                    <h3>Feedback</h3>
                    <p>
                      We welcome your comments, feedback, suggestions and other
                      communication regarding the Services. If you provide
                      Feedback, you hereby grant to Runfinity a non-exclusive,
                      trasnferable, assignable, perpetual, royalty-free license
                      to copy, distribute, create derivative works of, publicly
                      display and perform such Feedback and to use, make, have
                      made, sell, offer for sale, products and services based on
                      such Feedback. We ask that you send Runfinity any Feedback
                      in good faith but refrain from sending Runfinity Feedback
                      that you do not wish to license to us as set forth above.
                    </p>
                  </section>
                  <section class="section-border" id="help">
                    <h3>Support and Questions</h3>
                    <p>
                      We will respond to any questions regarding the Services
                      and these Terms via jackhosking2@outlook.com. We generally
                      respond to support requests within 1-3 days after the
                      request is placed.
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
