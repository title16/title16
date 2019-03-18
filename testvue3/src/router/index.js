import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage1'
import register from '@/components/Register'
import login from '@/components/Login'
import searchstudio from '@/components/searchstudio'

//homepage
import shouye from '@/components/homepage/shouye'
import project from '@/components/homepage/project'
import studio from '@/components/homepage/studio'
import aboutUs from '@/components/homepage/aboutUs'
import BMapComponent from '@/components/homepage/BMapComponent'

//工作室 studioafterlogin
import studiohomepage from '@/components/studioafterlogin/studiohomepage'
import studioproject  from '@/components/studioafterlogin/project'
import studiostudio from '@/components/studioafterlogin/studio'
import studioshouye from '@/components/studioafterlogin/shouye'
import projectdetail from '@/components/studioafterlogin/projectdetail'
import bid from '@/components/studioafterlogin/bid'
import bidding from '@/components/studioafterlogin/bidding'
import biddingdetail from '@/components/studioafterlogin/biddingdetail'
import executing from '@/components/studioafterlogin/executing'
import executingdetail from '@/components/studioafterlogin/executingdetail'
import ended from '@/components/studioafterlogin/ended'
import endeddeatil from '@/components/studioafterlogin/endeddetail'
import disputing from '@/components/studioafterlogin/disputing'
import disputingdetail from '@/components/studioafterlogin/disputingdetail'
import studiomanagement from '@/components/studioafterlogin/studiomanagement'
import studiomember from '@/components/studioafterlogin/studiomember'
import disputed from '@/components/studioafterlogin/disputed'
import disputeddetail from '@/components/studioafterlogin/disputeddetail'
import arbitration from '@/components/studioafterlogin/arbitration'

//公司 companyafterlogin
import companyshouye from '@/components/companyafterlogin/shouye'
import companyhomepage from '@/components/companyafterlogin/companyhomepage'
import postProject from '@/components/companyafterlogin/postProject'
import bidding_company from '@/components/companyafterlogin/bidding'
import choosetender from '@/components/companyafterlogin/choose-tender'
import executing_company from '@/components/companyafterlogin/executing'
import executingdetail_company from '@/components/companyafterlogin/executingdetail'
import ended_company from '@/components/companyafterlogin/ended'
import endeddeatil_company from '@/components/companyafterlogin/endeddetail'
import disputing_company from '@/components/companyafterlogin/disputing'
import disputingdetail_company from '@/components/studioafterlogin/disputingdetail'
import biddingstudiodetail from '@/components/companyafterlogin/biddingstudiodetail'
import tobid from '@/components/companyafterlogin/bid'
import company_studio from '@/components/companyafterlogin/studio'
import company_aboutUs from '@/components/companyafterlogin/aboutUs'

//专家expertafterlogin
import expertshouye from '@/components/expertafterlogin/shouye'
import experthomepage from '@/components/expertafterlogin/experthomepage'
import waitting from '@/components/expertafterlogin/waitting'
import waittingdisputingdetail from '@/components/expertafterlogin/waittingdisputingdetail'
import arbitrationhistory from '@/components/expertafterlogin/arbitrationhistory'
import arbitrateddetail from '@/components/expertafterlogin/arbitrateddetail'
import expertinfo from '@/components/expertafterlogin/expertinfo'
import modifyexpertinfo from '@/components/expertafterlogin/modifyexpertinfo'
import modifyexpertinfo_tel from '@/components/expertafterlogin/modifyexpertinfo_tel'
import modifyexpertinfo_account from '@/components/expertafterlogin/modifyexpertinfo_account'

//管理员managerafterlogin
import managershouye from '@/components/managerafterlogin/shouye'
import managerhomepage from '@/components/managerafterlogin/managerhomepage'
import companyapply from '@/components/managerafterlogin/companyapply'
import companyapplying from '@/components/managerafterlogin/companyapplying'
import companyapplydetail from '@/components/managerafterlogin/companyapplydetail'
import companymodify from '@/components/managerafterlogin/companymodify'
import studioapply from '@/components/managerafterlogin/studioapply'
import studioapplying from '@/components/managerafterlogin/studioapplying'
import studioapplydetail from '@/components/managerafterlogin/studioapplydetail'
import studiomodify from '@/components/managerafterlogin/studiomodify'
import expertapply from '@/components/managerafterlogin/expertapply'
import expertapplying from '@/components/managerafterlogin/expertapplying'
import expertapplydetail from '@/components/managerafterlogin/expertapplydetail'
import expertmodify from '@/components/managerafterlogin/expertmodify'

import costmanagement from '@/components/managerafterlogin/costmanagement'
import studioapplicationpayment from '@/components/managerafterlogin/studioapplicationpayment'
import paymenthistory from '@/components/managerafterlogin/paymenthistory'
import applicationpaymentdetail from '@/components/managerafterlogin/applicationpaymentdetail'
import companyhandoverhistory from '@/components/managerafterlogin/companyhandoverhistory'
import advertisementmanagement from '@/components/managerafterlogin/advertisementmanagement'
import projectsadvertisementmanagement from '@/components/managerafterlogin/projectsadvertisementmanagement'
import modifyprojectsadvertisement from '@/components/managerafterlogin/modifyprojectsadvertisement'
import studiosadvertisementmanagement from '@/components/managerafterlogin/studiosadvertisementmanagement'
import modifystudiosadvertisement from '@/components/managerafterlogin/modifystudiosadvertisement'
import distributedisputes from '@/components/managerafterlogin/distributedisputes'
import disputedetail from '@/components/managerafterlogin/disputedetail'
Vue.use(Router)

export default new Router({
  routes: [
    //登录
    // {
    //   path: '/',
    //   name: 'homepage',
    //   component: homepage
    // },
    {
      path: '/',
      redirect: '/shouye',
      component: homepage,
      children:[
        {
        path:'shouye',
        component:shouye
        },
        {
          path:'project',
          component:project
        },
        {
          path:'studio',
          component:studio
        },
        {
          path:'aboutUs',
          component:aboutUs
        },
        {
          path:'BMapComponent',
          component:BMapComponent
        },
        {
          path:'login',
          component:login
        },
        {
          path:'register',
          component:register
        },
        {
          path:'searchstudio',
          component:searchstudio
        },
        {
          path:'searchstudio',
          component:searchstudio
        }
        
        

      ]
    },
     {
      path: '/studioafterlogin',
      name:'studiologin',
      redirect: '/studioafterlogin/shouye',
      component: studiohomepage,
      children:[
        {
        path:'shouye',
        component:studioshouye
        },
        {
          path:'project',
          component:studioproject
        },
        {
          path:'studio',
          component:studiostudio
        },
        {
          path:'projectdetail',
          component:projectdetail
        },
        {
          path:'bid',
          component:bid
        },
        {
          path:'bidding',
          component:bidding
        },
        {
          path:'biddingdetail',
          component:biddingdetail
        },
        {
          path:'executing',
          component:executing
        },
        {
          path:'executingdetail',
          component:executingdetail
        },
        {
          path:'arbitration',
          component:arbitration
        },
        {
          path:'ended',
          component:ended
        },
        {
          path:'endeddetail',
          component:endeddeatil
        },
        {
          path:'disputing',
          component:disputing
        },
        {
          path:'disputingdetail',
          component:disputingdetail
        },
        {
          path:'disputed',
          component:disputed
        },
        {
          path:'disputeddetail',
          component:disputeddetail
        },
        {
          path:'studiomanagement',
          component:studiomanagement
        },
        {
          path:'studiomember',
          component:studiomember
        }
          
      ]
    },


    //公司
    {
      path: '/companyafterlogin',
      name:'companylogin',
      redirect: '/companyafterlogin/shouye',
      component: companyhomepage,
      children:[
        {
          path:'shouye',
          component:companyshouye
        },
        {
          path:'postProject',
          component:postProject
        },
        {
          path:'bidding',
          component:bidding_company
        },
        {
          path:'biddingstudiodetail',
          component:biddingstudiodetail
        },
        {
          path:'tobid',
          component:tobid
        },
        {
          path:'choose-tender',
          component:choosetender
        },
        {
          path:'executing',
          component:executing_company
        },
        {
          path:'executingdetail',
          component:executingdetail_company
        },
        {
          path:'ended',
          component:ended_company
        },
        {
          path:'endeddetail',
          component:endeddeatil_company
        },
        {
          path:'disputing',
          component:disputing_company
        },
        {
          path:'disputingdetail',
          component:disputingdetail_company
        },
        {
          path:'studio',
          component:company_studio
        },
        {
          path:'aboutUs',
          component:company_aboutUs
        },
      ]
    },

    //专家
    {
      path:'/expertafterlogin',
      redirect: '/expertafterlogin/shouye',
      component: experthomepage,
      children:[
        {
          path:'shouye',
          component:expertshouye
        },
        {
          path:'waitting',
          component:waitting
        },
        {
          path:'waittingdisputingdetail',
          component:waittingdisputingdetail
        },
        {
          path:'arbitrationhistory',
          component:arbitrationhistory
        },
        {
          path:'arbitrateddetail',
          component:arbitrateddetail
        },
        {
          path:'expertinfo',
          component:expertinfo
        },
        {
          path:'modifyexpertinfo',
          component:modifyexpertinfo
        },
        {
          path:'modifyexpertinfo_tel',
          component:modifyexpertinfo_tel
        },
        {
          path:'modifyexpertinfo_account',
          component:modifyexpertinfo_account
        }
      ]
    },

    //管理员
    {
      path:'/managerafterlogin',
      redirect: '/managerafterlogin/shouye',
      component: managerhomepage,
      children:[
        {
          path:'shouye',
          component:managershouye
        },
        {
          path:'companyapply',
          component:companyapply
        },
        {
          path:'companyapplying',
          component:companyapplying
        },
        {
          path:'companyapplydetail',
          component:companyapplydetail
        },
        {
          path:'companymodify',
          component:companymodify
        },
        {
          path:'studioapply',
          component:studioapply
        },
        {
          path:'studioapplying',
          component:studioapplying
        },
        {
          path:'studioapplydetail',
          component:studioapplydetail
        },
        {
          path:'studiomodify',
          component:studiomodify
        },
        {
          path:'expertapply',
          component:expertapply
        },
        {
          path:'expertapplying',
          component:expertapplying
        },
        {
          path:'expertapplydetail',
          component:expertapplydetail
        },
        {
          path:"expertmodify",
          component:expertmodify
        },

        {
          path:"costmanagement",
          redirect: '/managerafterlogin/costmanagement/studioapplicationpayment',
          component:costmanagement,
          children:[
            {
              path:'studioapplicationpayment',
              component:studioapplicationpayment
            },
            {
              path:'applicationpaymentdetail',
              component:applicationpaymentdetail
            },
            {
              path:'paymenthistory',
              component:paymenthistory
            },
            {
              path:'companyhandoverhistory',
              component:companyhandoverhistory
            }
          ]
        },

        {
          path:'advertisementmanagement',
          redirect: '/managerafterlogin/advertisementmanagement/projectsadvertisementmanagement',
          component:advertisementmanagement,
          children:[
            {
              path:'projectsadvertisementmanagement',
              component:projectsadvertisementmanagement
            },
            {
              path:'modifyprojectsadvertisement',
              component:modifyprojectsadvertisement
            },
            {
              path:'studiosadvertisementmanagement',
              component:studiosadvertisementmanagement
            },
            {
              path:'modifystudiosadvertisement',
              component:modifystudiosadvertisement
            }
          ]
        },

        {
          path:'distributedisputes',
          component:distributedisputes
        },
        {
          path:'disputedetail',
          component:disputedetail
        }
        
      ]
    }

    

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: register
    // },
    // {
    //   path: '/shouye',
    //   name: 'shouye',
    //   component: shouye
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: project
    // },
    //  {
    //   path: '/studio',
    //   name: 'studio',
    //   component: studio
    // },
    // {
    //   path: '/searchstudio',
    //   name: 'searchstudio',
    //   component: searchstudio
    // },
   
  ],

});
 