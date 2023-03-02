import { List, Datagrid, FunctionField, ImageField } from "react-admin";
import { WantedList } from "../../types/WantedList";

import hairStraight from "./assets/hair/straight.png";
import hairWavy from "./assets/hair/wavy.png";
import hairCurly from "./assets/hair/curly.png";
import hairKinky from "./assets/hair/kinky.png";

import skinBROWN from "./assets/skin/brown.png";
import skinFair from "./assets/skin/fair.png";
import skinDarkBrown from "./assets/skin/dark-brown.png";
import skinOlive from "./assets/skin/olive.png";
import skinLightBrown from "./assets/skin/light-brown.png";

import eyeBlack from "./assets/eye/black.png";
import eyeBlue from "./assets/eye/blue.png";
import eyeGreen from "./assets/eye/green.png";
import eyeSilver from "./assets/eye/silver.png";
import eyeBrown from "./assets/eye/brown.png";

import shapeDiamond from "./assets/shape/diamond.png";
import shapeOval from "./assets/shape/oval.png";
import shapeInvertedTriangle from "./assets/shape/inverted-triangle.png";
import shapeTriangle from "./assets/shape/triangle.png";
import shapeSquare from "./assets/shape/square.png";
import shapeRound from "./assets/shape/round.png";

import genderMale from "./assets/gender/male.svg";
import genderFemale from "./assets/gender/female.svg";

import imgDefault from "./assets/default/default.png";

export const WantedPersonList = () => {
  function showSkinColorImage(imageName: string) {
    switch (imageName) {
      case "BROWN":
        return skinBROWN;
      case "FAIR":
        return skinFair;
      case "OLIVE":
        return skinOlive;
      case "LIGHT-BROWN":
        return skinLightBrown;
      case "DARK-BROWN":
        return skinDarkBrown;
      default:
        return imgDefault;
    }
  }

  function showGenderImage(imageName: string) {
    switch (imageName) {
      case "MALE":
        return genderMale;
      case "FEMALE":
        return genderFemale;
      default:
        return imgDefault;
    }
  }

  function showEyeColorImage(imageName: string) {
    switch (imageName) {
      case "BLACK":
        return eyeBlack;
      case "BLUE":
        return eyeBlue;
      case "BROWN":
        return eyeBrown;
      case "GREEN":
        return eyeGreen;
      case "SILVER":
        return eyeSilver;
      default:
        return imgDefault;
    }
  }
  function showHairTypeImage(imageName: string) {
    switch (imageName) {
      case "CURLY":
        return hairCurly;
      case "Kinky":
        return hairKinky;
      case "STRAIGHT":
        return hairStraight;
      case "WAVY":
        return hairWavy;
      default:
        return imgDefault;
    }
  }
  function showFaceShapeImage(imageName: string) {
    switch (imageName) {
      case "DIAMOND":
        return shapeDiamond;
      case "INVERTED_TRIANGLE":
        return shapeInvertedTriangle;
      case "OVAL":
        return shapeOval;
      case "SQUARE":
        return shapeSquare;
      case "ROUND":
        return shapeRound;
      case "TRIANGLE":
        return shapeTriangle;
      default:
        return imgDefault;
    }
  }

  // const features = ["skinColor", "faceShape", "eyeColor", "gender", "hairType"];

  return (
    <List>
      <Datagrid rowClick={"show"}>
        <FunctionField
          label="Image"
          render={(record: WantedList) => (
            <img
              src={record.photoUrl ?? imgDefault}
              alt="Wanted Person Image"
              height="100px"
            />
          )}
        />

        <FunctionField
          label="Skin Color"
          render={(record: WantedList) => (
            <img
              src={showSkinColorImage(`${record.facialData.skinColor}`)}
              alt="skinColor"
              height="100px"
            />
          )}
        />
        <FunctionField
          label="faceShape"
          render={(record: WantedList) => (
            <img
              src={showFaceShapeImage(`${record.facialData.faceShape}`)}
              alt="faceshape"
              height="100px"
            />
          )}
        />

        <FunctionField
          label="eyeColor"
          alt="eyeColor"
          render={(record: WantedList) => (
            <img
              src={showEyeColorImage(`${record.facialData.eyeColor}`)}
              alt="eyeColor"
              height="100px"
            />
          )}
        />

        <FunctionField
          label="gender"
          alt="gender"
          render={(record: WantedList) => (
            <img
              src={showGenderImage(`${record.facialData.gender}`)}
              alt="gender"
              height="100px"
            />
          )}
        />
        <FunctionField
          label="hairType"
          alt="hairType"
          render={(record: WantedList) => (
            <img
              src={showHairTypeImage(`${record.facialData.hairType}`)}
              alt="hairtype"
              height="100px"
            />
          )}
        />
      </Datagrid>
    </List>
  );
};
