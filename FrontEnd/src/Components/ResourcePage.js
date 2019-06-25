import React, { Component } from "react";
import GoogleMaps, { MapContainer } from "./MapContainer";
import "./ResourcePage.css";

class ResourcePage extends Component {
  render() {
    return (
      <div id="Body">
        <div className="Title">
          <p>Local Places and Links You May Find Helpful</p>
        </div>
        <div className="Map">
          <GoogleMaps />
        </div>
        <div className="helpTitle">
          <p>Help Getting Started</p>
        </div>
        <div className="helpContainer">
          <div className="HelpfulLinks" />
          <div className="theminimalists">
            <a
              href="https://www.theminimalists.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              theminimalists.com
            </a>
            <div className="video">
              <iframe
                title="minimalist PodCast"
                src="https://www.youtube.com/embed/iKhQ75DfD2k"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <p>Blogs, Videos, Minimalist Help</p>
          </div>
          <div className="Simplify">
            <a
              href="https://simplifyandpursue.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              simplifyandpursue.com
              <p>
                <img src="./images/SimpleAndPure1.png" alt="SimplePureLogo" />
              </p>
            </a>
            <p>Family and Home Involvement</p>
          </div>
          <div className="Uncluttered">
            <a
              href="http://www.becomingminimalist.com/"
              target="-blank"
              rel="noopener noreferrer"
            >
              becomingminimalist.com
              <p>
                <img src="./images/uncluttered1.png" alt="UnclutteredLogo" />
              </p>
              <p>Help with Minimalist Beginnings</p>
            </a>
          </div>
        </div>
        <div className="donationTitle">
          <p>Donation Opportunities</p>
        </div>
        <div className="donationInfo">
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="https://www.habitat.org/restores/donate-goods"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/HforH125x57.png"
                  alt="Habitat for Humanity Logo"
                />
              </a>
              <p>
                Habitat ReStores are home improvement stores that accept small
                and large donations of new or gently used furniture, appliances,
                housewares, building materials and more. Proceeds from the sales
                of these items help Habitat's work in your community and around
                the world.
              </p>
            </div>
          </div>
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="https://www.toysfortots.org/request_toys/donate-toy.aspx"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img src="./images/TforT125x57.png" alt="ToysforTots Logo" />
              </a>
              <p>
                Donating a Toy is one of the experiences that makes Marine Toys
                for Tots different from other programs.
              </p>
            </div>
          </div>
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="https://ncadv.org/donate-a-phone"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img src="./images/NCADV125x57.png" alt="NCADV Logo" />
              </a>
              <p>
                NCADV partners with Cellular Recycler for the collection of used
                cell phones and select digital electronics. We receive a portion
                of the monies that come from the sale of refurbished cell phones
                to support our programming that helps stop violence in the home.
              </p>
            </div>
          </div>
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="https://givebackbox.com/works"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/GiveBackBox125x57.png"
                  alt="Give Back Box Logo"
                />
              </a>
              <p>
                Give Back Box® provides vendor services to retailers and
                charities, giving each and every cardboard box a second life to
                help people in need. So it is also a 'green' solution! Reuse
                your online shipping boxes in which you received your purchases,
                or any other cardboard box you may have, to donate your unwanted
                household items: such as gently used clothing, shoes etc., to
                make a major difference in the life of another person.
              </p>
            </div>
          </div>
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="https://wish.org/ways-to-help/giving/in-kind"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img src="./images/MAWish125x57.png" alt="Make A Wish Logo" />
              </a>
              <p>
                You can help create life-changing experiences for wish kids by
                donating goods such as frequent flier miles, hotel loyalty
                points, building materials, new electronics and more.
              </p>
            </div>
          </div>
          <div className="bulk">
            <div className="bulkTitle">
              <a
                href="http://baby2baby.org/"
                target="-blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/Baby2Baby_logo.png"
                  alt="Baby to Baby Logo"
                />
              </a>
              <p>
                Baby2Baby provides children living in poverty, ages 0-12 years,
                with diapers, clothing and all the basic necessities that every
                child deserves.
              </p>
            </div>
          </div>
        </div>
        <div className="socialTitle">
          <p>Social Media Interests</p>
        </div>
        <div className="socialContainer">
          <div className="pintrest">            
            <a
              href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=minimalist&eq=minim&etslf=8233&term_meta[]=minimalist%7Cautocomplete%7C2"
              target="-blank"
              rel="noopener noreferrer"
            >
            <p>Minimalist Tips</p>
              <img src="./images/pintrest-logo-web.png" alt="PintrestLogo" />
            </a>
          </div>
          <div className="facebook">           
            <a
              href="https://www.facebook.com/mnmlstlvng"
              target="-blank"
              rel="noopener noreferrer"
            >
             <p>Minimalist Living</p>
              <img src="./images/facebook-logo-web.png" alt="FacebookLogo" />
            </a>
          </div>
          <div className="facebook1">            
            <a
              href="https://www.facebook.com/groups/1421204557930992/"
              target="-blank"
              rel="noopener noreferrer"
            >
            <p>Frugal Minimalist</p>
              <img src="./images/facebook-logo-web.png" alt="FacebookLogo" />
            </a>
          </div>
          <div className="facebook1">            
            <a
              href="https://twitter.com/search?q=minimalism&src=tyah"
              target="-blank"
              rel="noopener noreferrer"
            > <p>Twitter #Minimalism</p>
              <img src="./images/twitter-logo-web.png" alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcePage;
