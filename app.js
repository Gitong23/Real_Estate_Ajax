function ItemTemplate(id, real_estate_name, LOCATION,
    property_type, SALE_TERMS, SALE_PRICE,
    RENT_PRICE, BEDROOMS, UNIT_SIZE, LAND_AREA,
    image_01) {
    let template = `
        <div class="col">
                        <div class="card shadow-sm">
                            <img src="{{{image_src}}}" width="100%" height="225" alt="property">
                            <div class="card-body">
                                <p class="card-text information">
                                    ชื่อ {{{real_estate_name}}}
                                </p>
                                <p class="card-text information">
                                    สถานที่ {{{LOCATION}}}
                                </p>
                                <p class="card-text information">
                                    สิทธิ์การขาย {{{SALE_TERMS}}}
                                </p>
                                <p class="card-text information">
                                    ราคาขาย {{{SALE_PRICE}}} บาท
                                </p>
                                <p class="card-text information">
                                    ราคาเช่า {{{RENT_PRICE}}} บาท
                                </p>
                                <p class="card-text information">
                                    จำนวน {{{BEDROOMS}}} ห้อง
                                </p>
                                <p class="card-text information">
                                    {{{UNIT_SIZE}}} ตารางเมตร
                                </p>
                                <p class="card-text information">
                                    {{{LAND_AREA}}} ตารางวา
                                </p>
                                
                                <div class="d-flex justify-content-between align-items-center">
                                    <button type="button" class="btn btn-primary select_prop_btn" id = '{{{btn_id}}}' propertyID = "{{{prop_id}}}">
                                        รายละเอียด
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> `;

    template = template.replaceAll("{{{image_src}}}", image_01);
    template = template.replaceAll("{{{real_estate_name}}}", real_estate_name);
    template = template.replaceAll("{{{LOCATION}}}", LOCATION);
    template = template.replaceAll("{{{property_type}}}", LOCATION);
    template = template.replaceAll("{{{SALE_TERMS}}}", SALE_TERMS);
    template = template.replaceAll("{{{SALE_PRICE}}}", SALE_PRICE);
    template = template.replaceAll("{{{RENT_PRICE}}}", RENT_PRICE);
    template = template.replaceAll("{{{BEDROOMS}}}", BEDROOMS);
    template = template.replaceAll("{{{UNIT_SIZE}}}", UNIT_SIZE);
    template = template.replaceAll("{{{LAND_AREA}}}", LAND_AREA);
    template = template.replaceAll("{{{btn_id}}}", 'property_id' + id);
    template = template.replaceAll("{{{prop_id}}}", id);

    template = template.replaceAll("null", "    -");

    return template;
}


function propertyDetailTemplate(data) {
    let template = `
    <div class="container px-4 py-2" id="custom-cards">
    <h2 class="pb-2 border-bottom" id="detail_content"><i class="fa-solid fa-house fa-lg"></i>Property Detail : {{{real_estate_name}}}</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

        <div class="col">
            <div class="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
                <img src="{{{image_01}}}" alt="">
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img src="{{{image_02}}}" alt="">
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img src="{{{image_03}}}" alt="">
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img src="{{{image_04}}}" alt="">
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img src="{{{image_05}}}" alt="">
            </div>
        </div>

        <table class="table table-striped ">
            <thead>
                <tr>
                    <th scope="col" class="topic">หัวข้อ</th>
                    <th scope="col">รายระเอียด</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="topic">id :</td>
                    <td>{{{id}}}</td>
                </tr>
                <tr>
                    <td class="topic">real_estate_name :</td>
                    <td>{{{real_estate_name}}}</td>
                </tr>
                <tr>
                    <td class="topic">lat :</td>
                    <td>{{{lat}}}</td>
                </tr>
                <tr>
                    <td class="topic">lon :</td>
                    <td>{{{lon}}}</td>
                </tr>
                <tr>
                    <td class="topic">LOCATION :</td>
                    <td>{{{LOCATION}}}</td>
                </tr>
                <tr>
                    <td class="topic">property_type :</td>
                    <td>{{{property_type}}}</td>
                </tr>
                <tr>
                    <td class="topic">TRANSACTION :</td>
                    <td>{{{TRANSACTION}}}</td>
                </tr>
                <tr>
                    <td class="topic">SALE_TERMS :</td>
                    <td>{{{SALE_TERMS}}}</td>
                </tr>
                <tr>
                    <td class="topic">SALE_PRICE :</td>
                    <td>{{{SALE_PRICE}}}</td>
                </tr>
                <tr>
                    <td class="topic">RENT_PRICE :</td>
                    <td>{{{RENT_PRICE}}}</td>
                </tr>
                <tr>
                    <td class="topic">COMMON_CHARGES :</td>
                    <td>{{{COMMON_CHARGES}}}</td>
                </tr>
                <tr>
                    <td class="topic">DECORATION_STYLE :</td>
                    <td>{{{DECORATION_STYLE}}}</td>
                </tr>
                <tr>
                    <td class="topic">BEDROOMS :</td>
                    <td>{{{BEDROOMS}}}</td>
                </tr>
                <tr>
                    <td class="topic">BATHROOMS :</td>
                    <td>{{{BATHROOMS}}}</td>
                </tr>
                <tr>
                    <td class="topic">DIRECTION_OF_ROOM :</td>
                    <td>{{{DIRECTION_OF_ROOM}}}</td>
                </tr>
                <tr>
                    <td class="topic">UNIT_SIZE :</td>
                    <td>{{{UNIT_SIZE}}}</td>
                </tr>
                <tr>
                    <td class="topic">LAND_AREA :</td>
                    <td>{{{LAND_AREA}}}</td>
                </tr>
                <tr>
                    <td class="topic">INROOM_FACILITIES :</td>
                    <td>{{{INROOM_FACILITIES}}}</td>
                </tr>
                <tr>
                    <td class="topic">PUBLIC_FACILITIES :</td>
                    <td>{{{PUBLIC_FACILITIES}}}</td>
                </tr>

            </tbody>

        </table>
    `;

    template = template.replaceAll("{{{image_01}}}", data.image_01);
    template = template.replaceAll("{{{image_02}}}", data.image_02);
    template = template.replaceAll("{{{image_03}}}", data.image_03);
    template = template.replaceAll("{{{image_04}}}", data.image_04);
    template = template.replaceAll("{{{image_05}}}", data.image_05);
    template = template.replaceAll("{{{id}}}", data.id);
    template = template.replaceAll("{{{real_estate_name}}}", data.real_estate_name);
    template = template.replaceAll("{{{lat}}}", data.lat);
    template = template.replaceAll("{{{lon}}}", data.lon);
    template = template.replaceAll("{{{LOCATION}}}", data.LOCATION);
    template = template.replaceAll("{{{property_type}}}", data.property_type);
    template = template.replaceAll("{{{TRANSACTION}}}", data.TRANSACTION);
    template = template.replaceAll("{{{SALE_TERMS}}}", data.SALE_TERMS);
    template = template.replaceAll("{{{SALE_PRICE}}}", data.SALE_PRICE);
    template = template.replaceAll("{{{RENT_PRICE}}}", data.RENT_PRICE);
    template = template.replaceAll("{{{COMMON_CHARGES}}}", data.COMMON_CHARGES);
    template = template.replaceAll("{{{DECORATION_STYLE}}}", data.DECORATION_STYLE);
    template = template.replaceAll("{{{BEDROOMS}}}", data.BEDROOMS);
    template = template.replaceAll("{{{BATHROOMS}}}", data.BATHROOMS);
    template = template.replaceAll("{{{DIRECTION_OF_ROOM}}}", data.DIRECTION_OF_ROOM);
    template = template.replaceAll("{{{UNIT_SIZE}}}", data.UNIT_SIZE);
    template = template.replaceAll("{{{LAND_AREA}}}", data.LAND_AREA);
    template = template.replaceAll("{{{INROOM_FACILITIES}}}", data.INROOM_FACILITIES);
    template = template.replaceAll("{{{PUBLIC_FACILITIES}}}", data.PUBLIC_FACILITIES);

    template = template.replaceAll("null", "    -");

    return template;
}


function onOpenPropertyDetail(id) {
    $(".showDetail").html("");

    let PropertyID = id;
    $.getJSON("https://expert-programming-tutor.com/Downloads/w701/property_detail.php?id=" + PropertyID, function(data) {
        var items = [];
        property_data = data;
        let temp = propertyDetailTemplate(data);
        $(".showDetail").append(temp);
        detailAppear();
        mapAppear();
        initMap(data.lat, data.lon);
    });


}



function onSearch() {
    $(".property_serach").html("");
    $(".showDetail").html("");
    mapHidden();
    let search_text = $("#search_text").val();

    $.getJSON("https://expert-programming-tutor.com/Downloads/w701/property_search.php?locate=" + search_text, function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let temp = ItemTemplate(data[i].id, data[i].real_estate_name, data[i].LOCATION,
                data[i].property_type, data[i].SALE_TERMS, data[i].SALE_PRICE,
                data[i].RENT_PRICE, data[i].BEDROOMS, data[i].UNIT_SIZE, data[i].LAND_AREA,
                data[i].image_01);
            $(".property_serach").append(temp);
        }

        if (data.length > 0) {
            searchAppear();
        } else {
            alert("Not Found Search Result");
        }

        $(".select_prop_btn").each(function() {
            $(this).click(function() { //that button in class
                let prop_id = $(this).attr("propertyID");
                onOpenPropertyDetail(prop_id);
            });
        });

    });

    return false;
}

function onSearch_ByType(keyword) {

    $(".property_serach").html("");
    $.getJSON("https://expert-programming-tutor.com/Downloads/w701/property_search.php?locate=", function(data) {

        let item = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].property_type == keyword) item.push(data[i]);
        }

        for (let i = 0; i < item.length; i++) {
            let temp = ItemTemplate(item[i].id, item[i].real_estate_name, item[i].LOCATION,
                item[i].property_type, item[i].SALE_TERMS, item[i].SALE_PRICE,
                item[i].RENT_PRICE, item[i].BEDROOMS, item[i].UNIT_SIZE, item[i].LAND_AREA,
                item[i].image_01);
            $(".property_serach").append(temp);
        }

        if (data.length > 0) {
            searchAppear();
        } else {
            alert("Not Found Search Result");
        }

        $(".select_prop_btn").each(function() {
            $(this).click(function() { //that button in class
                let prop_id = $(this).attr("propertyID");
                onOpenPropertyDetail(prop_id);
            });
        });

    });

}

function searchAppear() {
    const x = document.getElementsByClassName("album");
    x[0].style.display = "block";
    const y = document.getElementById("search_content");
    y.scrollIntoView();
}

function detailAppear() {
    const y = document.getElementById("detail_content");
    y.scrollIntoView();
}

function toFooter() {
    $('html,body').animate({ scrollTop: document.body.scrollHeight }, "fast");
}

function mapAppear(){
    const x = document.getElementsByClassName("map_content");
    x[0].style.display = "block";
    x[1].style.display = "block";
}

function mapHidden(){
    const x = document.getElementsByClassName("map_content");
    x[0].style.display = "none";
    x[1].style.display = "none";
}