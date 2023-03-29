import { proxy } from 'valtio'

import * as Consts_Task_Config from '~/src/resource/const/task_config'
import * as Types_Task_Config from '~/src/resource/type/task_config'
import * as Consts from '../resource/const/index'
import * as Types from '../resource/type/index'


export type Type_Status = {
    /**
     * 页面状态信息
     */
    status: {
        forceUpdate: number,
    }
    fetchTaskList: Types_Task_Config.Type_Fetch_Task_Config_Item[]
    generateConfig: {
        imageQuilty: Types_Task_Config.Type_Image_Quilty // 图片质量
        bookTitle: string // 书名
        comment: string // 备注
        maxItemInBook: Types_Task_Config.Type_Max_Item_In_Book // 自动分卷: 单本电子书中最大回答/想法/文章数量
        orderByList: Types_Task_Config.Type_Order_By_Config_List
        generateType: Types_Task_Config.Type_Generate_Type
    }

}

/**
 * 创建store
 */
export function createStore() {
    const store = proxy<Type_Status>({
        status: {
            forceUpdate: 0,
        },
        fetchTaskList: [],
        generateConfig: {
            ...Consts_Task_Config.Const_Default_Config.generateConfig,
            orderByList: [Consts.Const_Default_Order_Item],
        }
    })
    return store
}