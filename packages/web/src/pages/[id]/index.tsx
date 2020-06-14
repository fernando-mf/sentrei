/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import Error from "next/error";
import {useRouter} from "next/router";
import * as React from "react";

import {useTranslation} from "@sentrei/common/i18n";
import Space from "@sentrei/common/models/Space";
import {getSpace, listSpaces} from "@sentrei/common/services/spaces";
import Loader from "@sentrei/ui/components/Loader";
import SpaceList from "@sentrei/ui/components/SpaceList";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

interface SpacePageProps {
  space: Space.Get | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const spaces = await listSpaces();
  const paths = spaces.map(space => ({params: {id: space.id}}));
  return {paths, fallback: true};
};

export const getStaticProps: GetStaticProps<SpacePageProps> = async ({
  params,
}) => {
  const id = String(params?.id);
  const space = await getSpace(id);
  return {props: {space}, unstable_revalidate: 1};
};

const Spaces = ({
  space,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const {t} = useTranslation();

  const {isFallback} = useRouter();

  if (!space && isFallback) return <Loader />;
  if (!space) return <Error statusCode={404} />;

  return (
    <>
      <SentreiAppHeader
        faqText={t("headerFaq")}
        featuresText={t("headerFeatures")}
        pricingText={t("headerPricing")}
        productText={t("headerProduct")}
        loginText={t("headerLogin")}
        signupText={t("headerSignup")}
        testimonialText={t("headerTestimonial")}
      />
      <SpaceList space={space} />
    </>
  );
};

export default Spaces;
