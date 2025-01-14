"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../src/socialMedia.css";
library.add(fab);

const SocialMedia = () => {
  return (
    <footer>
      <div className="sm">
        <a href="#">
          <i>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </i>
        </a>
        <a href="#">
          <i>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </i>
        </a>
        <a href="#">
          <i>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCxfAOHhw3eAXNsgu3dVHGkQ"
        >
          <i>
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </i>
        </a>
        <a href="#">
          <i>
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </i>
        </a>
      </div>
      <br />
      <hr />
      <p>© 2023 Oasis. All rights reserved.</p>
    </footer>
  );
};

export default SocialMedia;
