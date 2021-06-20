export default class Legend {
    constructor(map) {
        this.map = map;
    }

    getLegend(styleNames) {
        let legendChild = document.getElementById("legend");
        legendChild.innerHTML="";
        let titleChild=document.getElementById("title");
        titleChild.innerHTML="";
        console.log(styleNames);
        for (let i = 0; i < styleNames.length; i++) {
            let style = styleNames[i];
            switch (style) {
                case "COVID-19-UK-USA-admin1":
                    this.createCOVID_19_UK_USA_admin1Legend(style);
                    break;
                case "UK-USA-totalStudent-point-19to20-ave":
                    this.createUK_USA_totalStudent_point_19to20_aveLegend();
                    break;
                case "UK-USA-totalStudent-point-ave":
                    this.createUK_USA_totalStudent_point_aveLegend();
                    break;
                case "UK-USA-totalStudent-point-19to20":
                    this.createUK_USA_totalStudent_point_19to20Legend();
                    break;
                case "UK-top20-university-point-19to20-ave":
                    this.createUK_top20_university_point_19to20_aveLegend();
                    break;
                case "UK-top20-university-point-ave":
                    this.createUK_top20_university_point_aveLegend();
                    break;
                case "UK-top20-university-point-19to20":
                    this.createUK_top20_university_point_19to20Legend();
                    break;
                case "USA-top20-university-point-19to20-ave":
                    this.createUSA_top20_university_point_19to20_aveLegend();
                    break;
                case "USA-top20-university-point-ave":
                    this.createUSA_top20_university_point_aveLegend();
                    break;
                case "USA-top20-university-point-19to20":
                    this.createUSA_top20_university_point_19to20Legend();
                    break;
                case "UK-top30-originCountry-line":
                    this.createUK_top30_originCountry_lineLegend();
                    break;
                case "USA-top30-originCountry-line":
                    this.createUSA_top30_originCountry_lineLegend();
                    break;
                case "COVID-19-globle-line":
                    this.createCOVID_19_globle_lineLegend();
                    break;
                case "COVID-19-globle-polygon":
                    this.createCOVID_19_globle_polygon();
                    break;
                case "UK-top30-originCountry-polygon-19to20-ave":
                    this.createUK_top30_originCountry_polygon_19to20_aveLegend();
                    break;
                case "UK-top30-originCountry-polygon-ave":
                    this.createUK_top30_originCountry_polygon_aveLegend();
                    break;
                case "UK-top30-originCountry-polygon-19to20":
                    this.createUK_top30_originCountry_polygon_19to20Legend();
                    break;
                case "USA-top30-originCountry-polygon-19to20-ave":
                    this.createUSA_top30_originCountry_polygon_19to20_aveLegend();
                    break;
                case "USA-top30-originCountry-polygon-ave":
                    this.createUSA_top30_originCountry_polygon_aveLegend();
                    break;
                case "USA-top30-originCountry-polygon-19to20":
                    this.createUSA_top30_originCountry_polygon_19to20Legend();
                    break;
                default:
                    break;
            }
        }
    }
    
    //------------------点图层图例------------------------//
    createCOVID_19_UK_USA_admin1Legend(styleName) {
        console.log("COVID_19_UK_USA_admin1L");
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="英美两国疫情分布图";
        title.appendChild(addTitle);
        //对所有的数值进行线性插值
        let count = 5; //插值次数
        let dRadius = (3 -21) / count;
        let dValue = (70520 - 3944955) / count;
        let circleColor = "#bf0808";
        let circleOpacity = 0.6;
        let strokeColor = "#840606";
        let strokeWidth = 0.75;
        console.log(dRadius, dValue, circleColor, circleOpacity, strokeWidth, strokeColor);
    
        let index = 1.5; //圆圈图例的放大倍数
        for (let i = 0; i < count; i++) {
            let item = document.createElement('div');
            item.style.height = ((21 + dRadius * i) * index + 8) + "px";
    
            let key = document.createElement('div');
            key.style.backgroundColor = circleColor
            key.style.width = (21 + dRadius * i) * index + "px";
            key.style.height = (21 + dRadius * i) * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = -dRadius * i * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.border = "solid " + strokeWidth + "px " + strokeColor;
    
            let value = document.createElement("span");
            value.innerHTML = Math.round(3944955 + dValue * i) + "人";
            value.style.position = "relative";
            value.style.left = (30 - (21 + dRadius * i) * index / 2) + "px";
            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    
    }
    
    createUK_USA_totalStudent_point_19to20_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年赴英美留学人数变化专题图";
        title.appendChild(addTitle);

        console.log("UK-USA-totalStudent-point-19to20-ave");
        let color = ["#e25e58", "#56a1ca"];
        let radius = [30, 5.49];
        let tValue = [96245, -17581]
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < 2; i++) {
            let item = document.createElement('div');
            item.style.height = "70px";
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (35 - radius[i] * index / 2) + "px";
            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            console.log(item);
            legend.appendChild(item);
        }
    
    
    }
    
    createUK_USA_totalStudent_point_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="近5年赴英美留学人数平均分布图";
        title.appendChild(addTitle);

        let color = ["#9ae2ef", "#65a5b8"];
        let radius = [16.54, 10.25];
        let tValue = [460380, 285293]
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < 2; i++) {
            let item = document.createElement('div');
            item.style.height = "40px";
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";

            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_USA_totalStudent_point_19to20Legend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年英美两国新入学总人数分布图";
        title.appendChild(addTitle);

        let color = ["#9ae2ef", "#65a5b8"];
        let radius = [20, 9.6];
        let tValue = [556625, 367712]
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < 2; i++) {
            let item = document.createElement('div');
            item.style.height = "50px";
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";
            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top20_university_point_19to20_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年赴英各高校留学人数变化专题图";
        title.appendChild(addTitle);

        let color = ["#e0b193", "#f6e0d6", "#f5f5f5", "#dadff0", "#a0cce2", "#56a1ca"];
        let radius = [15, 10, 5, 10, 15, 20];
        let tValue = [4000, 2000, 0, -2000, -4000, -6000];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < 6; i++) {
            let item = document.createElement('div');
            item.style.height = "32px";
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";

            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top20_university_point_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="近5年赴英各高校留学人数平均分布图";
        title.appendChild(addTitle);

        let color = ["#b9eff8", "#80d1ea", "#3bacd8", "#5999b1", "#2d5767"];
        let radius = [20, 15, 10, 5, 1.5];
        let tValue = [16000, 12000, 8000, 4000, 1387];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement('div');
            item.style.height = (radius[i] * 2 + 8) + "px"
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";

            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top20_university_point_19to20Legend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年赴英各高校留学总人数分布图";
        title.appendChild(addTitle);

        let color = ["#b9eff8", "#80d1ea", "#3bacd8", "#5999b1", "#2d5767"];
        let radius = [20, 15, 10, 5, 1];
        let tValue = [20000, 15000, 10000, 5000, 0];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement('div');
            item.style.height = (radius[i] * 2 + 8) + "px"
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";

            // value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top20_university_point_19to20_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年赴美各高校留学人数变化专题图";
        title.appendChild(addTitle);

        let color = ["#e25e58", "#e0b193", "#f6e0d6", "#f5f5f5", "#dadff0", "#a0cce2", "#56a1ca"];
        let radius = [20, 15, 10, 5, 10, 15, 20];
        let tValue = [6000, 4000, 2000, 0, -2000, -4000, -6000];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement('div');
            item.style.height = (radius[i] * 2 + 7) + "px"
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top20_university_point_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="近5年赴美各高校留学人数平均分布图";
        title.appendChild(addTitle);

        let color = ["#b9eff8", "#80d1ea", "#3bacd8", "#5999b1", "#2d5767"];
        let radius = [20, 15, 10, 5, 1];
        let tValue = [16000, 12000, 8000, 4000, 0];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement('div');
            item.style.height = (radius[i] * 2 + 8) + "px"
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top20_university_point_19to20Legend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年赴美各高校留学总人数分布图";
        title.appendChild(addTitle);

        let color = ["#b9eff8", "#80d1ea", "#3bacd8", "#5999b1", "#2d5767"];
        let radius = [20, 15, 10, 5, 1];
        let tValue = [20000, 15000, 10000, 5000, 0];
    
        let index = 2; //圆圈图例的放大倍数
        for (let i = 0; i < color.length - 1; i++) {
            let item = document.createElement('div');
            item.style.height = (radius[i] * 2 + 6) + "px"
    
            let key = document.createElement('div');
            key.style.backgroundColor = color[i];
            key.style.width = radius[i] * index + "px";
            key.style.height = radius[i] * index + "px";
            key.style.webkitBorderRadius = "50%";
            key.style.borderRadius = "50%";
            key.style.marginLeft = (radius[0] - radius[i]) * index / 2 + "px";
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.opacity = 0.5;
    
            let value = document.createElement("span");
            value.innerHTML = tValue[i] + "人";
            value.style.position = "relative";
            value.style.left = (30 - radius[i] * index / 2) + "px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    //------------------线图层图例------------------------//
    createUK_top30_originCountry_lineLegend() {
        let item = document.createElement("div");
        item.style.height = "30px";
    
        let key = document.createElement('div');
        key.style.display = "inline-block";
        key.style.verticalAlign = "middle";
        key.style.backgroundColor = "#696969";
        key.style.width = "50px";
        key.style.height = "2px";
    
        let value = document.createElement('span');
        // value.style.position = "relative";
        value.innerHTML = "赴英留学人数前30国家国界线";
        value.style.position = "relative";
        value.style.left = "10px";
    
        item.append(key);
        item.append(value);
        legend.appendChild(item);
    }
    
    createUSA_top30_originCountry_lineLegend() {
        let item = document.createElement("div");
        item.style.height = "30px";
    
        let key = document.createElement('div');
        key.style.display = "inline-block";
        key.style.verticalAlign = "middle";
        key.style.backgroundColor = "#696969";
        key.style.width = "50px";
        key.style.height = "2px";
    
        let value = document.createElement('span');
        // value.style.position = "relative";
        value.innerHTML = "赴英留学人数前30国家国界线";
        value.style.position = "relative";
        value.style.left = "10px";
    
        item.append(key);
        item.append(value);
        legend.appendChild(item);
    }
    
    createCOVID_19_globle_lineLegend() {
        let item = document.createElement("div");
        item.style.height = "30px";
    
        let key = document.createElement('div');
        key.style.display = "inline-block";
        key.style.verticalAlign = "middle";
        key.style.backgroundColor = "#878787";
        key.style.width = "50px";
        key.style.height = "2px";
    
        let value = document.createElement('span');
        // value.style.position = "relative";
        value.innerHTML = "国界线";
        value.style.position = "relative";
        value.style.left = "10px";
    
        item.append(key);
        item.append(value);
        legend.appendChild(item);
    }
    
    //------------------面图层图例------------------------//
    createCOVID_19_globle_polygon() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="全球疫情分布专题图";
        title.appendChild(addTitle);

        let color = ["#7a0000", "#a30000", "#ef350b", "#fe662f", "#ff9257", "#ffba7a", "#f5f5f5"];
        let valueA = [33378096, 16984218, 5775535, 2971270, 1863031, 935013, 458707, 0];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
    
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i];
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top30_originCountry_polygon_19to20_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年各国赴英留学人数变化图";
        title.appendChild(addTitle);

        let color = ["#ca0020", "#e25e58", "#e0b193", "#f6e0d6", "#f5f5f5", "#dadff0"];
        let valueA = [20, 15, 10, 5, 0, -5];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top30_originCountry_polygon_19to20Legend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年各国赴英留学人数专题图";
        title.appendChild(addTitle);

        let color = ["#ca0020", "#e25e58", "#e0b193", "#f6e0d6", "#f5f5f5", "#dbe0f0"];
        let valueA = [20, 15, 10, 5, 0, -5];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUK_top30_originCountry_polygon_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="近5年各国赴英留学人数平均分布图";
        title.appendChild(addTitle);

        let color = ["#cc0022", "#e25e58", "#e0b194", "#f6e0d6", "#f5f5f5", "#dadff0"];
        let valueA = [20, 15, 10, 5, 0, -5];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top30_originCountry_polygon_19to20_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年各国赴美留学人数变化图";
        title.appendChild(addTitle);
        
        let color = ["#e0b194", "#f6e0d6", "#f5f5f5", "#dadff0", "#a0cce2", "#56a1ca"];
        let valueA = [10, 5, 0, -5, -10, -15];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top30_originCountry_polygon_aveLegend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="近5年各国赴美留学人数平均分布图";
        title.appendChild(addTitle);

        let color = ["#e0b193", "#f6e0d6", "#f5f5f5", "#dadff0"];
        let valueA = [10, 5, 0, -5];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
    
    createUSA_top30_originCountry_polygon_19to20Legend() {
        let addTitle=document.createElement('h1');
        addTitle.innerHTML="19-20年各国赴美留学人数专题图";
        title.appendChild(addTitle);

        let color = ["#56a1ca", "#a0cce2", "#dadff0", "#f5f5f5", "#f6e0d6", "#e0b193", "#e25e58"];
        let valueA = [-15, -10, -5, 0, 5, 10, 15];
    
        for (let i = 0; i < color.length; i++) {
            let item = document.createElement("div");
            item.style.height = "30px";
    
            let key = document.createElement('div');
            key.style.display = "inline-block";
            key.style.verticalAlign = "middle";
            key.style.backgroundColor = color[i];
            key.style.width = "50px";
            key.style.height = "20px";
    
            let value = document.createElement('span');
            // value.style.position = "relative";
            value.innerHTML = valueA[i] + "%";
            value.style.position = "relative";
            value.style.left = "10px";
    
            item.append(key);
            item.append(value);
            legend.appendChild(item);
        }
    }
}

