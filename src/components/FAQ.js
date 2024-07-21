import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './FAQ.css';

const translations = {
  en: {
    faqTitle: 'FAQ - Wiki & Guides',
    wiki: 'Wiki/Doc',
    guides: 'Guides/Tutorials',
    gettingStarted: 'Getting Started with Our Services',
    gettingStartedDesc: 'Welcome to our services. This guide will help you get started with setting up your account and using our platform effectively.',
    accountManagement: 'Account Management',
    accountManagementDesc: 'Learn how to manage your account, update your information, and handle security settings.',
    serverSetup: 'Server Setup',
    serverSetupDesc: 'Follow these steps to set up your server quickly and easily.',
    advancedConfiguration: 'Advanced Configuration',
    advancedConfigurationDesc: 'Advanced settings and configurations for experienced users.',
    troubleshooting: 'Troubleshooting',
    troubleshootingDesc: 'Common issues and how to resolve them.',
    createServer: 'How to Create Your First Server',
    createServerDesc: 'Step-by-step instructions to create your first server.',
    customizeServer: 'Customizing Your Server',
    customizeServerDesc: 'Guide to customize your server to suit your needs.',
    manageSecurity: 'Managing Server Security',
    manageSecurityDesc: 'Ensure your server is secure with these tips.',
    optimizePerformance: 'Optimizing Server Performance',
    optimizePerformanceDesc: 'Tips to optimize the performance of your server.',
    backupData: 'Backing Up Your Data',
    backupDataDesc: 'Ensure your data is safe by performing regular backups.',
  },
  zh: {
    faqTitle: '常见问题 - 维基和指南',
    wiki: '维基/文档',
    guides: '指南/教程',
    gettingStarted: '开始使用我们的服务',
    gettingStartedDesc: '欢迎使用我们的服务。本指南将帮助您开始设置账户并有效使用我们的平台。',
    accountManagement: '账户管理',
    accountManagementDesc: '了解如何管理您的账户，更新您的信息，并处理安全设置。',
    serverSetup: '服务器设置',
    serverSetupDesc: '按照这些步骤快速轻松地设置您的服务器。',
    advancedConfiguration: '高级配置',
    advancedConfigurationDesc: '为有经验的用户提供的高级设置和配置。',
    troubleshooting: '故障排除',
    troubleshootingDesc: '常见问题及其解决方法。',
    createServer: '如何创建您的第一个服务器',
    createServerDesc: '创建第一个服务器的分步说明。',
    customizeServer: '自定义您的服务器',
    customizeServerDesc: '指南：根据您的需要自定义服务器。',
    manageSecurity: '管理服务器安全',
    manageSecurityDesc: '确保您的服务器安全的提示。',
    optimizePerformance: '优化服务器性能',
    optimizePerformanceDesc: '优化服务器性能的提示。',
    backupData: '备份您的数据',
    backupDataDesc: '通过定期备份确保您的数据安全。',
  },
};

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState('');
  const [selectedSubSection, setSelectedSubSection] = useState('');
  const [language, setLanguage] = useState('en');

  const handleExpandSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection('');
      setSelectedSubSection('');
    } else {
      setExpandedSection(section);
      setSelectedSubSection('');
    }
  };

  const handleSelectSubSection = (subSection) => {
    setSelectedSubSection(subSection);
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const t = translations[language];

  return (
    <Container className="mt-5 faq-container">
      <h2>{t.faqTitle}</h2>
      <select onChange={changeLanguage} aria-label="Select language">
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
      <Row>
        <Col sm={3}>
          <Nav className="flex-column" role="navigation" aria-label="FAQ sections">
            <Nav.Link onClick={() => handleExpandSection('wiki')} className="nav-section" role="button" tabIndex="0">
              {t.wiki}
              <span className="expand-icon">{expandedSection === 'wiki' ? '▼' : '▶'}</span>
            </Nav.Link>
            {expandedSection === 'wiki' && (
              <div className="nav-subsection">
                <Nav.Link onClick={() => handleSelectSubSection('getting-started')} className="nav-item" role="button" tabIndex="0">{t.gettingStarted}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('account-management')} className="nav-item" role="button" tabIndex="0">{t.accountManagement}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('server-setup')} className="nav-item" role="button" tabIndex="0">{t.serverSetup}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('advanced-configuration')} className="nav-item" role="button" tabIndex="0">{t.advancedConfiguration}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('troubleshooting')} className="nav-item" role="button" tabIndex="0">{t.troubleshooting}</Nav.Link>
              </div>
            )}
            <Nav.Link onClick={() => handleExpandSection('guides')} className="nav-section" role="button" tabIndex="0">
              {t.guides}
              <span className="expand-icon">{expandedSection === 'guides' ? '▼' : '▶'}</span>
            </Nav.Link>
            {expandedSection === 'guides' && (
              <div className="nav-subsection">
                <Nav.Link onClick={() => handleSelectSubSection('create-server')} className="nav-item" role="button" tabIndex="0">{t.createServer}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('customize-server')} className="nav-item" role="button" tabIndex="0">{t.customizeServer}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('manage-security')} className="nav-item" role="button" tabIndex="0">{t.manageSecurity}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('optimize-performance')} className="nav-item" role="button" tabIndex="0">{t.optimizePerformance}</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('backup-data')} className="nav-item" role="button" tabIndex="0">{t.backupData}</Nav.Link>
              </div>
            )}
          </Nav>
        </Col>
        <Col sm={9}>
          {expandedSection === 'wiki' && selectedSubSection === '' && (
            <div className="content-section">
              <h3>{t.wiki}</h3>
              <p>Select a sub-section to view detailed documentation.</p>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === '' && (
            <div className="content-section">
              <h3>{t.guides}</h3>
              <p>Select a sub-section to view detailed guides and tutorials.</p>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'getting-started' && (
            <div className="content-section">
              <h3>{t.gettingStarted}</h3>
              <p>{t.gettingStartedDesc}</p>
              <ul>
                <li>Creating an Account</li>
                <li>Logging In</li>
                <li>Setting Up Your Profile</li>
                <li>Exploring the Dashboard</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'account-management' && (
            <div className="content-section">
              <h3>{t.accountManagement}</h3>
              <p>{t.accountManagementDesc}</p>
              <ul>
                <li>Updating Personal Information</li>
                <li>Changing Password</li>
                <li>Enabling Two-Factor Authentication</li>
                <li>Viewing Account Activity</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'server-setup' && (
            <div className="content-section">
              <h3>{t.serverSetup}</h3>
              <p>{t.serverSetupDesc}</p>
              <ul>
                <li>Choosing a Server Plan</li>
                <li>Configuring Server Settings</li>
                <li>Deploying Your Server</li>
                <li>Monitoring Server Performance</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'advanced-configuration' && (
            <div className="content-section">
              <h3>{t.advancedConfiguration}</h3>
              <p>{t.advancedConfigurationDesc}</p>
              <ul>
                <li>Custom Scripts</li>
                <li>Integrating Third-Party Services</li>
                <li>Automating Tasks</li>
                <li>Scaling Your Infrastructure</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'troubleshooting' && (
            <div className="content-section">
              <h3>{t.troubleshooting}</h3>
              <p>{t.troubleshootingDesc}</p>
              <ul>
                <li>Server Downtime</li>
                <li>Performance Issues</li>
                <li>Configuration Errors</li>
                <li>Contacting Support</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'create-server' && (
            <div className="content-section">
              <h3>{t.createServer}</h3>
              <p>{t.createServerDesc}</p>
              <ul>
                <li>Selecting a Server Plan</li>
                <li>Setting Up the Server</li>
                <li>Deploying the Server</li>
                <li>Initial Configuration</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'customize-server' && (
            <div className="content-section">
              <h3>{t.customizeServer}</h3>
              <p>{t.customizeServerDesc}</p>
              <ul>
                <li>Installing Plugins</li>
                <li>Modifying Server Settings</li>
                <li>Custom Scripts</li>
                <li>User Permissions</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'manage-security' && (
            <div className="content-section">
              <h3>{t.manageSecurity}</h3>
              <p>{t.manageSecurityDesc}</p>
              <ul>
                <li>Setting Up Firewalls</li>
                <li>Using Strong Passwords</li>
                <li>Monitoring Access Logs</li>
                <li>Regular Backups</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'optimize-performance' && (
            <div className="content-section">
              <h3>{t.optimizePerformance}</h3>
              <p>{t.optimizePerformanceDesc}</p>
              <ul>
                <li>Monitoring Server Metrics</li>
                <li>Upgrading Server Resources</li>
                <li>Optimizing Code and Queries</li>
                <li>Regular Maintenance</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'backup-data' && (
            <div className="content-section">
              <h3>{t.backupData}</h3>
              <p>{t.backupDataDesc}</p>
              <ul>
                <li>Choosing a Backup Strategy</li>
                <li>Automating Backups</li>
                <li>Restoring from Backups</li>
                <li>Storing Backup Files</li>
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
