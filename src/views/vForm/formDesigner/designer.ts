import type { basicFormat } from "./widgetPanel/tsInterface";
import { uniqId } from "./utils/index"
import _ from "lodash";
export class CreateDesigner {
    static createDesigner = new CreateDesigner();
    widgetList: Array<basicFormat> = [];
    formConfig = { cssCode: '' };

    selectedId:string = "";
    selectedWidget:basicFormat = {} as basicFormat;
    selectedWidgetName:string|undefined = "";  //选中组件名称（唯一）
    // vueInstance= vueInstance;

    formWidget = null;  //表单设计容器

    cssClassList = [];  //自定义样式列表

    historyData = {
        index: -1,  //index= 0;
        maxStep: 20,
        steps: [],
    }
    // 基础字段添加到画布
    protected addFieldByDbClick(widget: basicFormat) {
        let newWidget = this.copyNewFieldWidget(widget)
        // if (!!this.selectedWidget && this.selectedWidget.type === 'tab') {
        //     //获取当前激活的tabPane
        //     let activeTab = this.selectedWidget.tabs[0]
        //     this.selectedWidget.tabs.forEach(tabPane => {
        //         if (!!tabPane.options.active) {
        //             activeTab = tabPane
        //         }
        //     })

        //     !!activeTab && activeTab.widgetList.push(newWidget)
        // } else if (!!this.selectedWidget && !!this.selectedWidget.widgetList) {
        //     this.selectedWidget.widgetList.push(newWidget)
        // } else {
        //     console.log(widget);
        //     console.log(newWidget);
        //     this.widgetList.push(newWidget)
        // }

        this.setSelected(newWidget)
        // this.emitHistoryChange()
        this.widgetList.push(newWidget)
    }
    // 深拷贝
    protected copyNewFieldWidget(widget: basicFormat) {
        let newWidget = JSON.parse(JSON.stringify(_.cloneDeep(origin)))
        let tempId = uniqId()
        newWidget.id = newWidget.type.replace(/-/g, '') + tempId
        newWidget.options.name = newWidget.id
        newWidget.options.label = newWidget.options.label || newWidget.type.toLowerCase()

        delete newWidget.displayName
        return newWidget
    }
    // 设置选中的组件
    protected setSelected(selected:basicFormat) {
        if (!selected) {
            // this.clearSelected()
            return
        }
        this.selectedWidget = selected
        if (!!selected.id) {
            this.selectedId = selected.id
            this.selectedWidgetName = selected.options.name
        }
    }
}
export default CreateDesigner.createDesigner
// export function createDesigner() {
//     return {
//         widgetList: [],
//         formConfig: { cssCode: '' },

//         selectedId: null,
//         selectedWidget: null,
//         selectedWidgetName: null,  //选中组件名称（唯一）
//         // vueInstance: vueInstance,

//         formWidget: null,  //表单设计容器

//         cssClassList: [],  //自定义样式列表

//         historyData: {
//             index: -1,  //index: 0,
//             maxStep: 20,
//             steps: [],
//         },
//         addContainerByDbClick(container) {
//             // let newCon = this.copyNewContainerWidget(container)
//             this.widgetList.push(container)
//             // this.setSelected(newCon)
//         }
//     }
// }