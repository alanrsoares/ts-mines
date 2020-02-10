import styled, {
  getColor,
  getFontFamily,
  getShadow,
  getRadius
} from "ui/styled";

export const Root = styled.div`
  font-family: ${getFontFamily("default")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background: ${getColor("muted")};
`;

export const AppBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  background: ${getColor("gray")};
  box-shadow: ${getShadow("default")};
`;

export const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("secondary")};
  font-weight: 700;
  font-size: 1.8em;
  margin-left: 0.5em;
`;

export const Score = styled.div`
  font-family: ${getFontFamily("display")};
  font-weight: 700;
  font-size: 1em;
  margin-right: 0.5em;
  border-radius: ${getRadius("lg")};
  padding: 0.2em 0.4em;
  background: ${getColor("black")};
  color: palegoldenrod;
  border: solid 2px palegoldenrod;
  box-shadow: ${getShadow("default")};
  display: flex;
  align-items: center;
`;

export const ScoreLabel = styled.span`
  color: ${getColor("muted")};
  margin-right: 0.3em;
  font-size: 0.9em;
  font-family: ${getFontFamily("display")};
`;

export const StatusDisplay = styled.img`
  background: ${getColor("shadow")};
  border-radius: 50%;
  box-shadow: ${getShadow("default")};
  width: 2.8em;
  height: 2.8em;
  margin-top: 0.8em;
`;

export const Content = styled.div`
  display: flex;
  max-width: calc(100vw - 1em);
  max-height: calc(100vh - 5em);
  overflow: scroll;
  -ms-overflow-style: none;
  margin-top: 1em;
  margin-bottom: 1em;
`;
