import OutfitRecommendationsSection from "@/components/dashboard/banner/OutfitRecommendationsSection";
import TrendingItemsSection from "@/components/dashboard/banner/TrendingItemsSection";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import OGContainer from "@/components/outfit-experience/OGContainer";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";

const Dashboard = () => {
  return (
    <ScreenWrapper style={{ paddingTop: 0 }}>
      <DashboardHeader />
      <OGContainer paddingTop={20}>
        <OutfitRecommendationsSection />
        <TrendingItemsSection />
      </OGContainer>
    </ScreenWrapper>
  );
};

export default Dashboard;
