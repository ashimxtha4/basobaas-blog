import { Icon } from "@iconify/react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";

const SocialMedia = ({ methode }: { methode: any }) => {
  const router = useRouter();
  const socialMediaList: any = [
    {
      component: (
        <FacebookShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon icon="bi:facebook" color="blue" width="40" height="40" />
        </FacebookShareButton>
      ),
      name: "Facebook",
    },
    {
      component: (
        <EmailShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon icon="logos:google-gmail" width="40" height="40" />
        </EmailShareButton>
      ),
      name: "Mail",
    },
    {
      component: (
        <LinkedinShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon icon="mdi:linkedin" color="blue" width="40" height="40" />
        </LinkedinShareButton>
      ),
      name: "LinkedIn",
    },
    {
      component: (
        <TwitterShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon icon="mdi:twitter" color="#1da1f2" width="40" height="40" />
        </TwitterShareButton>
      ),
      name: "Twitter",
    },
    {
      component: (
        <ViberShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon
            icon="simple-icons:viber"
            color="purple"
            width="40"
            height="40"
          />
        </ViberShareButton>
      ),
      name: "Viber",
    },
    {
      component: (
        <WhatsappShareButton
          url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
        >
          <Icon icon="logos:whatsapp-icon" width="40" height="40" />
        </WhatsappShareButton>
      ),
      name: "WhatsApp",
    },
    {
        component: (
          <TelegramShareButton
            url={"https://basobaasblog.asterdio.xyz/blog/" + router?.query?.slug}
          >
            <Icon icon="logos:telegram" width="40" height="40" />
          </TelegramShareButton>
        ),
        name: "Telegram",
      },
  ];
  return (
    <div className="socialContainerDiv">
      {socialMediaList.map((values: any, index: number) => (
        <label
          className="socialComponent"
          key={index}
          onClick={() => {
            methode(false);
          }}
        >
          <label className="buttons">{values.component}</label>
          <span className="socialName">{values.name}</span>
        </label>
      ))}
    </div>
  );
};

export default SocialMedia;
