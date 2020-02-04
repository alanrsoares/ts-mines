import styled, { getColor, getFontFamily } from "ui/styled";

export const icons = {
  // tslint:disable-next-line:max-line-length
  check: `50% no-repeat url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIwLjM0OXB4IiBoZWlnaHQ9IjE1LjgyNnB4IiB2aWV3Qm94PSIwIDAgMjAuMzQ5IDE1LjgyNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAuMzQ5IDE1LjgyNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxwb2x5Z29uIGZpbGw9IiNmZmZmZmYiIHBvaW50cz0iMTguMjI4LDAgMjAuMzQ5LDIuMTIyIDYuNjQ0LDE1LjgyNiAwLDkuMTgyIDIuMTIyLDcuMDYxIDYuNjQ0LDExLjU4MyAiLz4gPC9zdmc+)`,
  // tslint:disable-next-line:max-line-length
  cross: `50% no-repeat  url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE1Ljg3M3B4IiBoZWlnaHQ9IjE1Ljg5MXB4IiB2aWV3Qm94PSIwIDAgMTUuODczIDE1Ljg5MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTUuODczIDE1Ljg5MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZGE0MTIxIiBwb2ludHM9IjE0LjE4NiwwIDE1Ljg3MywxLjc0IDkuNjg2LDcuOTYzIDE1LjgzOCwxNC4xNSAxNC4xNSwxNS44OTEgNy45MjgsOS43MjEgMS44MTEsMTUuODkxIDAuMDM1LDE0LjE1IDYuMTg4LDcuOTYzIDAsMS43NzUgMS43NTgsMCA3Ljk2Myw2LjI0ICIvPiA8L3N2Zz4=)`
};

export const Shell = styled.div`
  display: flex;
  background-color: ${getColor("light")};
  font-family: Lato, Arial, Helvetica, sans-serif;
  color: ${getColor("black")};
  min-height: 100vh;
  font-size: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("background.svg");
  background-position: bottom;
  @media screen and (max-height: 823px) {
    font-size: 16px;
    background-size: contain;
  }
  @media screen and (max-height: 700px) {
    font-size: 15px;
  }
  @media screen and (max-height: 600px) {
    font-size: 14px;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 1.8em;
  max-width: 414px;
  flex-grow: 1;
`;

export const AppHeader = styled.header`
  font-size: 2em;
  font-family: ${getFontFamily("display")};
  text-align: center;
  color: ${getColor("secondary")};
  font-weight: bold;
  padding: 0.6em;
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
    color: ${getColor("white")};
    background-color: ${getColor("secondary")};
    padding: 0.4em;
  }
`;
