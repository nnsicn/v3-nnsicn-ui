import type { basicFormat } from "./widgetPanel/tsInterface";
export class CreateDesigner {
    static createDesigner = new CreateDesigner();
    widgetList:Array<basicFormat> = [];
    formConfig= { cssCode: '' };

    selectedId= null;
    selectedWidget= null;
    selectedWidgetName= null;  //选中组件名称（唯一）
    // vueInstance= vueInstance;

    formWidget= null;  //表单设计容器

    cssClassList= [];  //自定义样式列表

    historyData= {
        index: -1,  //index= 0;
        maxStep: 20,
        steps: [],
    }
    protected addContainerByDbClick(container:basicFormat) {
        // console.log(container);
        
        this.widgetList.push(container)
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