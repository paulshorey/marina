import React from "react";
import styled from "styled-components";
// import a from "next/link";

export default function Footer({ rows = {} }) {
  return (
    <Styled className="Footer">
      {!!rows["testimonials title"] && <h3>{rows["testimonials title"].value}</h3>}
      <p className="testimonial">
        <span>
          <b>“</b>Thank you Marina for all your help. After our RTT session, I noticed I have been leaving food on my
          plate at dinner. I also noticed when prepping vegetables for dinner tonight I didn't think twice about tossing
          out the scraps and only keeping the best of the produce. I've been naturally without any effort, eating less
          and eating better quality food. Noticing the benefits of what I am eating - the vitamins, the fiber, the
          essential fats that fuel my brain as well as my body. I totally have a different attitude toward food and have
          been eating so much less without any conscious effort. It's working!
        </span>
        <span>
          <b>”</b> Debbie S.
        </span>
      </p>

      <p className="testimonial">
        <span>
          <b>“</b>The RTT Hypnosis session really helped me to understand what was holding me back, it helped me to see
          where I started withdrawing and doubting my capabilities and I was able to release beliefs that limited my
          confidence and self-esteem. After the session, I was able to take immediate action steps to start building my
          confidence and self-esteem. Now I am finding that my creativity and curiosity are at a whole new level! I am
          speaking up more in meetings and taking action steps every day toward my goals!
        </span>
        <span>
          <b>”</b> Jamie B.
        </span>
      </p>

      <p className="testimonial">
        <span>
          <b>“</b>Marina gently addressed my most sensitive personal issues. The questions she asked illuminated my deep
          sorrowful beliefs. The RTT session with Marina helped me to establish a wonderful feeling of being unbound,
          renewed, and uplifted. She helped me to let go of my negative opinions and understandings of the past and
          aided me to substitute the uneasy feelings with more comforting ones. The problem I had before the session is
          not bothering me anymore. As a result, it helps me to unwind my mind, to fall asleep fast, and stay asleep all
          through the night.
        </span>
        <span>
          <b>”</b> Lana S.
        </span>
      </p>

      <p className="testimonial">
        <span>
          <b>“</b>Amazing! I just listened to my personal recording after the RTT session. I will do it morning and
          night and add journaling to my routine. I already feel relaxed and energetic at the same time. Excited to go
          on this journey! Thank you so much, Marina! It's totally helping me feel more confident that everything will
          fall into place. I feel pretty calm and excited!
        </span>
        <span>
          <b>”</b> Emma H.
        </span>
      </p>
    </Styled>
  );
}

const Styled = styled.nav`
  margin: 25px 0 100px;
  text-align: center;

  h3 {
    margin-bottom: 0px;
  }

  p {
    display: inline-block;
    margin: 25px 50px;
    max-width: 500px;

    @media (min-width: 769px) {
      &:last-of-type {
        margin-right: 0;
      }
    }
    @media (max-width: 768px) {
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    span:first-of-type {
      color: #999;
    }

    span:last-of-type {
      display: block;
      color: #333;
      padding: 10px 15px;
    }

    b {
      font-size: 200%;
      color: #666;
      line-height: 20px;
    }
  }
`;
