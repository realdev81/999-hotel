import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
// @ts-ignore
import logo from "../../assets/header-logo.webp";
// @ts-ignore
import LanguageSwitcher from "../../components/ui/languageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  // Mock user data - replace with actual user data from context/state
  const user = {
    name: "John Doe",
    role: "Hotel Owner",
    avatar: null, // or user avatar URL
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    // Handle settings logic
    console.log("Settings clicked");
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        {t("header.profile")}
      </Menu.Item>
      <Menu.Item
        key="settings"
        icon={<SettingOutlined />}
        onClick={handleSettings}
      >
        {t("header.settings")}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        {t("header.logout")}
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Right Section - Language Switcher and User Menu */}
          <div className="flex items-center ">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User Info and Avatar */}
            <div className="flex items-center space-x-3">
              {/* Avatar Dropdown */}
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
                  <Avatar
                    size={32}
                    icon={<UserOutlined />}
                    src={user.avatar}
                    className="border-2 border-emerald-500"
                  />
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {user.role}
                    </span>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
