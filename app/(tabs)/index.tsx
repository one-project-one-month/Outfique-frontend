import ScreenWrapper from '@/components/ScreenWrapper';
import TabBar from '@/components/TabBar';
import { useRouter } from 'expo-router';
import React from 'react';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = React.useState<string>('closet');
    const router = useRouter();

    const handleTabPress = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'home') router.push('/(dashboard)/Home');
        if (tab === 'saved') router.push('/(save)/saved');
        if (tab === 'closet') router.push('/(closet)/Home');
    };

    return (
        <ScreenWrapper>
          {children}
            {/* Tab Bar */}
            <TabBar activeTab={activeTab} onTabPress={handleTabPress} />
        </ScreenWrapper>
    );
};

export default Tabs;
