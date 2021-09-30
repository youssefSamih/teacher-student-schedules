import { Icons } from 'assets'
import { NeiRoute } from 'lib/types'
import { NotFound } from 'features/notFound'
import { Scheduler } from 'features/scheduler'
import { CONFIG } from '../config'
import { PathNames, Paths } from './paths'

export const routes: Array<NeiRoute> = [
    {
        path: Paths.NotFound,
        name: PathNames.NotFound,
        component: NotFound,
        hidden: true
    },
    {
        path: Paths.Scheduler,
        name: PathNames.Scheduler,
        component: Scheduler,
        Icon: Icons.Schedule
    },
    {
        path: Paths.Content,
        name: PathNames.Content,
        Icon: Icons.Content,
        routes: [
            {
                path: Paths.Pages,
                name: PathNames.Pages,
                link: `${CONFIG.FULCRUM_URL}${Paths.Pages}`
            },
            {
                path: Paths.Reviews,
                name: PathNames.Reviews,
                link: `${CONFIG.FULCRUM_URL}${Paths.Reviews}`
            },
            {
                path: Paths.Links,
                name: PathNames.Links,
                link: `${CONFIG.FULCRUM_URL}${Paths.Links}`
            },
            {
                path: Paths.Team,
                name: PathNames.Team,
                link: `${CONFIG.FULCRUM_URL}${Paths.Team}`
            }
        ]
    },
    {
        path: Paths.Products,
        name: PathNames.Products,
        link: `${CONFIG.FULCRUM_URL}${Paths.Products}`,
        Icon: Icons.Products
    },
    {
        path: Paths.Companies,
        name: PathNames.Companies,
        link: `${CONFIG.FULCRUM_URL}${Paths.Companies}`,
        Icon: Icons.Company
    },
    {
        path: Paths.Students,
        name: PathNames.Students,
        link: `${CONFIG.FULCRUM_URL}${Paths.Students}`,
        Icon: Icons.Students
    },
    {
        path: Paths.Picar,
        name: PathNames.Picar,
        link: `${CONFIG.FULCRUM_URL}${Paths.Picar}`,
        Icon: Icons.Picar
    },
    {
        path: Paths.Information,
        name: PathNames.Information,
        link: `${CONFIG.FULCRUM_URL}${Paths.Information}`,
        Icon: Icons.Information
    },
    {
        path: Paths.UserContent,
        name: PathNames.UserContent,
        Icon: Icons.UserContent,
        routes: [
            {
                path: Paths.ExtraEnglish,
                name: PathNames.ExtraEnglish,
                link: `${CONFIG.FULCRUM_URL}${Paths.ExtraEnglish}`
            },
            {
                path: Paths.ExtraEnglishExpress,
                name: PathNames.ExtraEnglishExpress,
                link: `${CONFIG.FULCRUM_URL}${Paths.ExtraEnglishExpress}`
            },
            {
                path: Paths.AutoAssigned,
                name: PathNames.AutoAssigned,
                link: `${CONFIG.FULCRUM_URL}${Paths.AutoAssigned}`
            },
            {
                path: Paths.QuestionSet,
                name: PathNames.QuestionSet,
                link: `${CONFIG.FULCRUM_URL}${Paths.QuestionSet}`
            },
            {
                path: Paths.Tags,
                name: PathNames.Tags,
                link: `${CONFIG.FULCRUM_URL}${Paths.Tags}`
            },
            {
                path: Paths.TagsLogs,
                name: PathNames.TagsLogs,
                link: `${CONFIG.FULCRUM_URL}${Paths.TagsLogs}`
            },
            {
                path: Paths.Suggestions,
                name: PathNames.Suggestions,
                link: `${CONFIG.FULCRUM_URL}${Paths.Suggestions}`
            },
            {
                path: Paths.Recordings,
                name: PathNames.Recordings,
                link: `${CONFIG.FULCRUM_URL}${Paths.Recordings}`
            }
        ]
    },
    {
        path: Paths.AdminOnDuty,
        name: PathNames.AdminOnDuty,
        link: `${CONFIG.FULCRUM_URL}${Paths.AdminOnDuty}`,
        Icon: Icons.AdminOnDuty
    },
    {
        path: Paths.Admins,
        name: PathNames.Admins,
        link: `${CONFIG.FULCRUM_URL}${Paths.Admins}`,
        Icon: Icons.Admins
    },
    {
        path: Paths.Teacher,
        name: PathNames.Teacher,
        link: `${CONFIG.FULCRUM_URL}${Paths.Teacher}`,
        Icon: Icons.Teachers
    },
    {
        path: Paths.PromoCodes,
        name: PathNames.PromoCodes,
        link: `${CONFIG.FULCRUM_URL}${Paths.PromoCodes}`,
        Icon: Icons.PromoCodes
    },
    {
        path: Paths.EmailSending,
        name: PathNames.EmailSending,
        Icon: Icons.Email,
        routes: [
            {
                path: Paths.EmailList,
                name: PathNames.EmailList,
                link: `${CONFIG.FULCRUM_URL}${Paths.EmailList}`
            },
            {
                path: Paths.EmailSimpleList,
                name: PathNames.EmailSimpleList,
                link: `${CONFIG.FULCRUM_URL}${Paths.EmailSimpleList}`
            },
            {
                path: Paths.EmailTemplates,
                name: PathNames.EmailTemplates,
                link: `${CONFIG.FULCRUM_URL}${Paths.EmailTemplates}`
            },
            {
                path: Paths.EmailVariables,
                name: PathNames.EmailVariables,
                link: `${CONFIG.FULCRUM_URL}${Paths.EmailVariables}`
            }
        ]
    },
    {
        path: Paths.Settings,
        name: PathNames.Settings,
        Icon: Icons.Settings,
        routes: [
            {
                path: Paths.SystemSettings,
                name: PathNames.SystemSettings,
                link: `${CONFIG.FULCRUM_URL}${Paths.SystemSettings}`
            },
            {
                path: Paths.SettingsList,
                name: PathNames.SettingsList,
                link: `${CONFIG.FULCRUM_URL}${Paths.SettingsList}`
            }
        ]
    },
    {
        path: Paths.Localizer,
        name: PathNames.Localizer,
        Icon: Icons.Globe,
        link: `${CONFIG.FULCRUM_URL}${Paths.Localizer}`
    }
]
