import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import App from "./App";
import "./assets/styles/Global.scss";
import AccountsDashboard from "./view/Account/AccountsDashboard";
import AlertContainer from "./view/Alert/AlertContainer";
import Footer from "./components/Molecules/Footer/Footer";
import Header from "./components/Molecules/Header/Header";
import Notfound from "./components/NotFound";
import WelcomeDashboard from "./view/Welcome";
import SignIn from "./view/SignIn/SignIn";
import Customerservices from "./view/CustomerServices/CustomerServices";
import AuthorizationCode from "./view/SignIn/AuthorizationCode";
import AuthorizationPage from "./view/SignIn/AuthorizationPage";
import StopCheckPayment from "./view/CustomerServices/StopCheckPayment";
import ViewClearedChecks from "./view/CustomerServices/ViewClearedChecks";
import CheckReorder from "./view/CustomerServices/CheckReorder";
import CheckReorderOverview from "./view/CustomerServices/CheckReorderOverview";
import CheckReorderInterestitial from "./view/CustomerServices/CheckReorderInterstitial";
import EnrollmentPage from "./view/SignIn/EnrollmentPage";
import EnrollStarted from "./view/SignIn/EnrollStarted";
import OrderCheckCopies from "./view/CustomerServices/OrderCheckCopies";
import StatementsDocuments from "./view/CustomerServices/StatementsDocuments";
import ForgotID from "./view/SignIn/ForgotPassword";
import securityQuestion from "./view/SignIn/SecurityQuestion";
import PersonalProduct from "./view/CustomerServices/PersonalProductInfo";
import PrideReorderCheck from "./view/CustomerServices/PrideReorderCheck";
import ProductPreview from "./view/CustomerServices/ProductPreview";
import ShoppingCart from "./view/CustomerServices/ShoppingCart";
import SetupDirectDeposit from "./view/CustomerServices/SetupDirectDeposit";
import OverdraftProtectionServices from "./view/CustomerServices/OverdraftProtectionServices";
import BalanceConnect from "./view/CustomerServices/BalanceConnect";
import DirectDepositPrintMail from "./view/CustomerServices/DirectDepositPrintMail";
import MobileBanking from "./view/MobileBanking";
import AddAccountNickName from "./view/CustomerServices/AddAccountNickName";
import ShoppingCartCheckout from "./view/CustomerServices/ShoppingCartCheckout";
import ChangeOnlinePasscode from "./view/SignIn/ChangeOnlinePasscode";
import ChangeOnlinePasscodeConfirm from "./view/SignIn/ChangeOnlinePasscodeConfirm";
import AccountDetails from "./view/Account/AccountDetails";
import ContactManagement from "./view/CustomerServices/ContactManagement";
import SecurityDashboard from "./view/SecurityCenter/SecurityDashboard";
import SecurityTips from "./view/SecurityCenter/SecurityTips";
import SecurityAlerts from "./view/SecurityCenter/SecurityAlerts";
import SignInHistory from "./view/SecurityCenter/SignInHistory";
import SignInSetting from "./view/SecurityCenter/SignInSetting";
import CardSettings from "./view/CardSettings/CardSettings";
import ProfileSetting from "./view/SecurityCenter/ProfileSetting";
import ExtraSecurity from "./view/SecurityCenter/ExtraSecurity";
import SpendingDashboard from "./view/SpendingBudgeting/SpendingDashboard";
import OverviewCategory from "./view/SpendingBudgeting/OverviewCategory";
import TransfersDashboard from "./view/TransfersZelle/TransfersDashboard";
import MyAccountMake from "./view/TransfersZelle/MyAccountsMake";
import SendMoneyOutside from "./view/TransfersZelle/SendMoney/SendMoneyOutside";
import AllSetUp from "./view/TransfersZelle/SendMoney/AllSetUp";
import OutsideAccountsDashboard from "./view/TransfersZelle/OutsideAccounts/OutsideAccountsDashboard";
import ZelleLanding from "./view/TransfersZelle/ZelleLanding";
import BillPayDashboard from "./view/BillPay/BillPayDashboard";
import BillActivity from "./view/BillPay/BillActivity";
import ManageAccounts from "./view/BillPay/ManageAccounts";
import PortfolioDashboard from "./view/MyPortfolio/PortfolioDashboard";
import LifePlan from "./view/Account/LifePlan";
import LifePlanSummary from "./view/Account/LifePlanSummary";
import BudgetOverview from "./view/MyPortfolio/BudgetOverview";
import SaveGoal from "./view/MyPortfolio/SaveGoal";
import FicoScoreDashboard from "./view/MyPortfolio/FicoScoreDashboard";
import PaymentGroup from "./view/BillPay/PaymentGroup";
import DisputeTransaction from "./view/Account/DisputeTransaction";
import DisputeTransactionStep2 from "./view/Account/DisputeTransactionStep2";
import TransactionQaStep1 from "./view/Account/TransactionQaStep1";
import TransactionQaStep2 from "./view/Account/TransactionQaStep2";
import TransactionQaStep3 from "./view/Account/TransactionQaStep3";
import TransactionQaStep4 from "./view/Account/TransactionQaStep4";
import DisputeConfirmation from "./view/Account/DisputeConfirmation";
import PaymentSchedule from "./view/BillPay/PaymentSchedule";
import CashBackDeals from "./view/RewardsAndDeals/CashBackDeals";
import HelpDashboard from "./view/Help/HelpDashboard";
import MyRewards from "./view/RewardsAndDeals/MyRewards";
import PerferredLanding from "./view/RewardsAndDeals/PreferredLanding";
import ToolsInvesting from "./view/ToolsAndInvestment/ToolsInvesting";
import LearnMore from "./view/ToolsAndInvestment/LearnMore";
import PreferredReward from "./view/Account/PreferredReward";
import DisputeTransactionList from "./view/Account/DisputeTransactionList";
import VisaCheckout from "./view/Help/VisaCheckout";
import ChangeOnlineId from "./view/CustomerServices/ChangeOnlineId";
import ChooseNewSiteKey from "./view/CustomerServices/ChooseNewSiteKey";
import ChangeSiteKeyTitle from "./view/CustomerServices/ChangeSiteKeyTitle";
import OnlineIdConfirm from "./view/CustomerServices/OnlineIdConfirm";
import ChangeChallenge from "./view/CustomerServices/ChangeChallenge";
import SecurityPage from "./view/CustomerServices/SecurityPage";
import TravelNotice from "./view/Help/TravelNotice";
import TravelConfirmation from "./view/Help/TravelConfirmation";
import ManageSafePass from "./view/Account/ManageSafePass";
import AboutSafePass from "./view/Account/AboutSafePass";
import PageList from "./view/PageList";

import {
    createBrowserHistory
} from "history";

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

export const Routes = () => {
    return ( <
        div className = "App bg-white m-auto" >
        <
        Switch >
        <
        Route exact path = "/"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/index.html" >
        <
        Redirect to = "/" / >
        <
        /Route> <
        Route exact path = "/index.html#" >
        <
        Redirect to = "/" / >
        <
        /Route> <
        Route exact path = "/App"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/Alert/:slug"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SignIn/:slug"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/CustomerServices"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/AuthorizationCode/:slug"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/AuthorizationPage/:slug"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/StopCheckPayment"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ViewClearedChecks"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/CheckReorder"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/CheckReorderOverview"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/CheckReorderInterestitial"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/EnrollmentPage"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/EnrollStarted"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/OrderCheckCopies"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/StatementsDocuments/:pathParam"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/securityQuestion"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ForgotPass"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/PersonalProduct"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/PrideReorderCheck"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ProductPreview"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ShoppingCart"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/VisaCheckout"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/SetupDirectDeposit"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/OverdraftProtectionServices"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/BalanceConnect"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/DirectDepositPrintMail"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/MobileBanking"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/AddAccountNickName"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ShoppingCartCheckout"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ChangeOnlinePasscode"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ChangeOnlinePasscodeConfirm"
        component = {
            PublicLayout
        }
        /> <
        Route exact path = "/ContactManagement"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SecurityDashboard"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SecurityTips"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SecurityAlerts"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SignInHistory"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SignInSetting"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/AccountDetails/:pathParam1/:pathParam2"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/CardSettings"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ProfileSetting"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SpendingDashboard"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/OverviewCategory"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ExtraSecurity"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ZelleLanding"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/TransfersDashboard"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/MyAccountMake"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/SendMoneyOutside/:active_tab/:active_view?"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/AllSetUp"
        component = {
            ProtectedLayout
        }
        /> <
        Route path = "/OutsideAccountsDashboard/:pathParam"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/BillPayDashboard/:slug"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/PortfolioDashboard"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/LifePlan"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/LifePlanSummary"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/BudgetOverview"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SaveGoal"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/FicoScoreDashboard"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/PaymentGroup/:slug"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/BillActivity"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ManageAccounts"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/DisputeTransaction"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/DisputeTransactionStep2"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TransactionQaStep1"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TransactionQaStep2"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TransactionQaStep3"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TransactionQaStep4"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/DisputeConfirmation"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/PaymentSchedule"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/CashBackDeals"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ToolsInvesting"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/HelpDashboard/:slug"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/MyRewards"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/PreferredRewards"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/MyRewards/1"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/DisputeTransactionList"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ChangeOnlineId"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ChooseNewSiteKey"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ChangeSiteKeyTitle"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/OnlineIdConfirm"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ChangeChallenge"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/SecurityPage"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/LearnMore"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TravelNotice"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/TravelConfirmation"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/ManageSafePass"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/AboutSafePass"
        component = {
            ProtectedLayout
        }
        /> <
        Route exact path = "/PageList"
        component = {
            PublicLayout
        }
        /> <
        Route >
        <
        Redirect to = "/" / >
        <
        /Route> <
        /Switch> <
        /div>
    );
};
export default Routes;

export const PublicLayout = () => ( <
    Switch >
    <
    Route exact path = "/"
    component = {
        WelcomeDashboard
    }
    /> <
    Route exact path = "/SignIn/:slug"
    component = {
        SignIn
    }
    /> <
    Route exact path = "/AuthorizationCode/:slug"
    component = {
        AuthorizationCode
    }
    /> <
    Route exact path = "/AuthorizationPage/:slug"
    component = {
        AuthorizationPage
    }
    /> <
    Route exact path = "/EnrollmentPage"
    component = {
        EnrollmentPage
    }
    /> <
    Route exact path = "/EnrollStarted"
    component = {
        EnrollStarted
    }
    /> <
    Route exact path = "/ForgotPass"
    component = {
        ForgotID
    }
    /> <
    Route exact path = "/securityQuestion"
    component = {
        securityQuestion
    }
    /> <
    Route exact path = "/PersonalProduct"
    component = {
        PersonalProduct
    }
    /> <
    Route exact path = "/PrideReorderCheck"
    component = {
        PrideReorderCheck
    }
    /> <
    Route exact path = "/ProductPreview"
    component = {
        ProductPreview
    }
    /> <
    Route exact path = "/ShoppingCart"
    component = {
        ShoppingCart
    }
    /> <
    Route exact path = "/ShoppingCartCheckout"
    component = {
        ShoppingCartCheckout
    }
    /> <
    Route exact path = "/ChangeOnlinePasscode"
    component = {
        ChangeOnlinePasscode
    }
    /> <
    Route exact path = "/ChangeOnlinePasscodeConfirm"
    component = {
        ChangeOnlinePasscodeConfirm
    }
    /> <
    Route exact path = "/DirectDepositPrintMail"
    component = {
        DirectDepositPrintMail
    }
    /> <
    Route exact path = "/VisaCheckout"
    component = {
        VisaCheckout
    }
    /> <
    Route exact path = "/ViewClearedChecks"
    component = {
        ViewClearedChecks
    }
    /> <
    Route exact path = "/PageList"
    component = {
        PageList
    }
    /> <
    /Switch>
);

export const ProtectedLayout = () => ( <
    div className = "overflow-hidden" >
    <
    Header / >
    <
    Switch >
    <
    Route exact path = "/App"
    component = {
        App
    }
    /> <
    Route exact path = "/Account"
    component = {
        AccountsDashboard
    }
    /> <
    Route exact path = "/Alert/:slug"
    component = {
        AlertContainer
    }
    /> <
    Route exact path = "/CustomerServices"
    component = {
        Customerservices
    }
    /> <
    Route exact path = "/StopCheckPayment"
    component = {
        StopCheckPayment
    }
    />

    <
    Route exact path = "/CheckReorder"
    component = {
        CheckReorder
    }
    /> <
    Route exact path = "/CheckReorderOverview"
    component = {
        CheckReorderOverview
    }
    /> <
    Route exact path = "/CheckReorderInterestitial"
    component = {
        CheckReorderInterestitial
    }
    /> <
    Route exact path = "/OrderCheckCopies"
    component = {
        OrderCheckCopies
    }
    /> <
    Route exact path = "/StatementsDocuments/:pathParam"
    component = {
        StatementsDocuments
    }
    /> <
    Route exact path = "/SetupDirectDeposit"
    component = {
        SetupDirectDeposit
    }
    /> <
    Route exact path = "/OverdraftProtectionServices"
    component = {
        OverdraftProtectionServices
    }
    /> <
    Route exact path = "/BalanceConnect"
    component = {
        BalanceConnect
    }
    /> <
    Route exact path = "/AddAccountNickName"
    component = {
        AddAccountNickName
    }
    /> <
    Route exact path = "/MobileBanking"
    component = {
        MobileBanking
    }
    /> <
    Route exact path = "/ContactManagement"
    component = {
        ContactManagement
    }
    /> <
    Route exact path = "/SecurityDashboard"
    component = {
        SecurityDashboard
    }
    /> <
    Route exact path = "/SecurityTips"
    component = {
        SecurityTips
    }
    /> <
    Route exact path = "/SecurityAlerts"
    component = {
        SecurityAlerts
    }
    /> <
    Route exact path = "/SignInHistory"
    component = {
        SignInHistory
    }
    /> <
    Route exact path = "/SignInSetting"
    component = {
        SignInSetting
    }
    /> <
    Route path = "/AccountDetails/:pathParam1/:pathParam2"
    component = {
        AccountDetails
    }
    /> <
    Route exact path = "/CardSettings"
    component = {
        CardSettings
    }
    /> <
    Route exact path = "/ProfileSetting"
    component = {
        ProfileSetting
    }
    /> <
    Route exact path = "/SpendingDashboard"
    component = {
        SpendingDashboard
    }
    /> <
    Route exact path = "/OverviewCategory"
    component = {
        OverviewCategory
    }
    /> <
    Route exact path = "/ExtraSecurity"
    component = {
        ExtraSecurity
    }
    /> <
    Route exact path = "/TransfersDashboard"
    component = {
        TransfersDashboard
    }
    /> <
    Route exact path = "/ZelleLanding"
    component = {
        ZelleLanding
    }
    /> <
    Route path = "/MyAccountMake"
    component = {
        MyAccountMake
    }
    /> <
    Route path = "/SendMoneyOutside/:active_tab/:active_view?"
    component = {
        SendMoneyOutside
    }
    /> <
    Route path = "/AllSetUp"
    component = {
        AllSetUp
    }
    /> <
    Route path = "/OutsideAccountsDashboard/:pathParam"
    component = {
        OutsideAccountsDashboard
    }
    /> <
    Route exact path = "/BillPayDashboard/:slug"
    component = {
        BillPayDashboard
    }
    /> <
    Route exact path = "/PortfolioDashboard"
    component = {
        PortfolioDashboard
    }
    /> <
    Route exact path = "/LifePlan"
    component = {
        LifePlan
    }
    /> <
    Route exact path = "/LifePlanSummary"
    component = {
        LifePlanSummary
    }
    /> <
    Route exact path = "/BudgetOverview"
    component = {
        BudgetOverview
    }
    /> <
    Route exact path = "/SaveGoal"
    component = {
        SaveGoal
    }
    /> <
    Route exact path = "/FicoScoreDashboard"
    component = {
        FicoScoreDashboard
    }
    /> <
    Route exact path = "/PaymentGroup/:slug"
    component = {
        PaymentGroup
    }
    /> <
    Route exact path = "/BillActivity"
    component = {
        BillActivity
    }
    /> <
    Route exact path = "/ManageAccounts"
    component = {
        ManageAccounts
    }
    /> <
    Route exact path = "/DisputeTransaction"
    component = {
        DisputeTransaction
    }
    /> <
    Route exact path = "/DisputeTransactionStep2"
    component = {
        DisputeTransactionStep2
    }
    /> <
    Route exact path = "/TransactionQaStep1"
    component = {
        TransactionQaStep1
    }
    /> <
    Route exact path = "/TransactionQaStep2"
    component = {
        TransactionQaStep2
    }
    /> <
    Route exact path = "/TransactionQaStep3"
    component = {
        TransactionQaStep3
    }
    /> <
    Route exact path = "/TransactionQaStep4"
    component = {
        TransactionQaStep4
    }
    /> <
    Route exact path = "/DisputeConfirmation"
    component = {
        DisputeConfirmation
    }
    /> <
    Route exact path = "/PaymentSchedule"
    component = {
        PaymentSchedule
    }
    /> <
    Route exact path = "/CashBackDeals"
    component = {
        CashBackDeals
    }
    /> <
    Route exact path = "/ToolsInvesting"
    component = {
        ToolsInvesting
    }
    /> <
    Route exact path = "/HelpDashboard/:slug"
    component = {
        HelpDashboard
    }
    /> <
    Route exact path = "/MyRewards"
    component = {
        MyRewards
    }
    /> <
    Route exact path = "/MyRewards/1"
    component = {
        PerferredLanding
    }
    /> <
    Route exact path = "/PreferredRewards"
    component = {
        PreferredReward
    }
    /> <
    Route exact path = "/ChangeOnlineId"
    component = {
        ChangeOnlineId
    }
    /> <
    Route exact path = "/ChooseNewSiteKey"
    component = {
        ChooseNewSiteKey
    }
    /> <
    Route exact path = "/ChangeSiteKeyTitle"
    component = {
        ChangeSiteKeyTitle
    }
    /> <
    Route exact path = "/OnlineIdConfirm"
    component = {
        OnlineIdConfirm
    }
    /> <
    Route exact path = "/ChangeChallenge"
    component = {
        ChangeChallenge
    }
    /> <
    Route exact path = "/SecurityPage"
    component = {
        SecurityPage
    }
    /> <
    Route exact path = "/LearnMore"
    component = {
        LearnMore
    }
    /> <
    Route exact path = "/TravelNotice"
    component = {
        TravelNotice
    }
    /> <
    Route exact path = "/TravelConfirmation"
    component = {
        TravelConfirmation
    }
    /> <
    Route exact path = "/DisputeTransactionList"
    component = {
        DisputeTransactionList
    }
    /> <
    Route exact path = "/ManageSafePass"
    component = {
        ManageSafePass
    }
    /> <
    Route exact path = "/AboutSafePass"
    component = {
        AboutSafePass
    }
    /> <
    Route path = "*"
    component = {
        Notfound
    }
    /> <
    /Switch> <
    Footer / >
    <
    /div>
);