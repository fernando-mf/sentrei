import styled from "styled-components";

const FeatureWrapper = styled.section`
  background-attachment: fixed;
  background-image: url(${FeatureBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 160px;
  padding-top: 210px;
  position: relative;
  @media only screen and (max-width: 480px) {
    background: none;
  }
  @media (max-width: 767px) {
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: auto;
  }
  @media (max-width: 990px) {
    padding-top: 180px;
    padding-bottom: 60px;
    min-height: auto;
  }
  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 767px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
`;

const FeatureObject = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  @media (max-width: 767px) {
    display: none;
  }
  .objectWrapper {
    margin-left: auto;
    position: relative;
    .dashboardWrapper {
      position: absolute;
      top: 0;
      right: 0;
      .chatObject {
        position: absolute;
        top: 20px;
        left: 120px;
      }
    }
  }
`;

export {FeatureObject, FeatureWrapper};
