import React from "react";

import styled, {
  getColor,
  getShadow,
  getRadius,
  getAnimation
} from "ui/styled";

import { ReactComponent as GithubSVG } from "assets/github.svg";

export const GithubIcon = styled(GithubSVG)`
  height: 1.6em;
  width: 1.6em;
`;

export const GithubLabel = styled.div`
  white-space: nowrap;
`;

export const GithubBadge = styled.a`
  border-radius: ${getRadius("round")};
  color: ${getColor("secondary")};
  background: ${getColor("white")};
  display: flex;
  padding: 0.3em 0.4em;
  width: 1.8em;
  height: 1.8em;
  overflow: hidden;
  ${GithubLabel} {
    display: none;
  }
  justify-content: space-around;
  align-items: center;
  box-shadow: ${getShadow("default")};
  font-weight: 700;
  text-decoration: none;
  :hover {
    ${GithubLabel} {
      display: flex;
      animation: ${getAnimation("appear")} 0.3s;
    }
    width: 12em;
    border-radius: calc(1.8em);
  }
  transition: all 0.3s ease-in-out;
  user-select: none;
  outline: none;
`;

const Github: React.FC = () => {
  return (
    <GithubBadge
      target="_blank"
      rel="noreferrer"
      href="https://github.com/alanrsoares/ts-mines"
      aria-label="got to the project's github page"
    >
      <GithubIcon />
      <GithubLabel>@alanrsoares/ts-mines</GithubLabel>
    </GithubBadge>
  );
};

export default Github;
