// ---- VARIABLES ----
const members = [
    {
        name: 'Timothée "Timoogo" G.',
        profilePicture: { src: "img/timothee_g.jpg", alt: "Image profil Thimotée"},
        fullBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum rutrum enim at consequat. Fusce vehicula maximus sagittis. Pellentesque eget dolor in sem viverra condimentum et eget diam. Curabitur mollis odio a condimentum ultricies. Proin ut orci a nisl fermentum pulvinar ac ac magna. Sed scelerisque diam varius leo iaculis, sed ullamcorper arcu iaculis. Praesent nibh lectus, facilisis nec tempor id, malesuada a ipsum. Proin eu pretium magna, quis sodales libero. Curabitur eget iaculis velit.<br/>Integer nec mauris risus. Ut id leo sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam magna odio, commodo sit amet hendrerit eget, ullamcorper eu lacus. In consectetur turpis mauris, sed laoreet tortor volutpat eu. Cras feugiat euismod porttitor. Morbi vitae ultrices neque.<br/>Nulla tellus tortor, scelerisque elementum auctor quis, viverra eget libero. Curabitur sollicitudin augue ut turpis cursus pretium. Aliquam scelerisque dapibus pellentesque. Nunc tincidunt eleifend est in vulputate. Aenean in sodales nibh, vel euismod eros. Morbi in aliquam neque. Quisque turpis justo, interdum facilisis nulla eu, commodo tincidunt sem. Etiam sollicitudin vehicula varius. Etiam egestas magna a egestas ultricies.<br/>Etiam tristique faucibus magna, ut tempus nunc sodales consectetur. Praesent quis nisi lobortis, sodales sem nec, commodo turpis. Donec hendrerit, nulla quis ornare condimentum, nunc ligula sodales eros, eget euismod erat neque eu est. Etiam sapien odio, consectetur ac turpis at, hendrerit rhoncus dui. Integer scelerisque porttitor neque, quis eleifend dolor condimentum facilisis. Vivamus tempor quis magna nec molestie. Sed suscipit ante lorem, ac finibus neque blandit ac. Sed ullamcorper maximus magna, eu imperdiet arcu volutpat eleifend. Quisque et neque vel ex pharetra convallis non ac mi. Donec a turpis leo. Aliquam tincidunt egestas viverra. Mauris aliquet, dui vel consequat varius, turpis lacus varius massa, id ultrices dolor orci vitae lacus.<br/>Duis cursus sodales odio. Phasellus eu vehicula felis. Nunc luctus sapien id ultrices cursus. Aenean congue feugiat imperdiet. Nullam eleifend dui maximus tortor dignissim mattis. Pellentesque porta venenatis mollis. Etiam finibus, leo quis aliquam finibus, ipsum turpis fermentum risus, sit amet aliquet urna est quis ex. Cras convallis venenatis risus, in imperdiet dui ullamcorper eu. Morbi malesuada fringilla odio, at porttitor velit facilisis at. Praesent diam eros, iaculis luctus auctor eu, scelerisque iaculis erat. Pellentesque volutpat sapien leo, ac varius massa blandit in."
    },
    {
        name: 'Alexandre "ImWallAshing" V.',
        profilePicture: { src: "img/imagelove-lies-2-pika.png", alt: "Image de profil Alexandre (elle est meilleurs que les autres)"},
        fullBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi quam, ornare quis feugiat sit amet, tempus in erat. Etiam volutpat nulla quam, in tristique turpis vulputate ut. Donec imperdiet tellus nec elementum aliquet. Pellentesque efficitur lorem eget dui aliquet molestie. Vestibulum eget diam felis. Aliquam tristique ante quis augue eleifend convallis. Aliquam molestie libero non velit tempor, sit amet elementum libero aliquam. Pellentesque id placerat lacus. Duis quis purus posuere justo vehicula feugiat. In ultrices non velit quis eleifend.<br/>Etiam malesuada sapien tortor. Cras consequat dictum sodales. Nunc in consequat tortor. Integer massa tellus, mollis a condimentum eu, lacinia vel velit. Pellentesque ante tellus, consequat quis massa interdum, porttitor consectetur lectus. Curabitur molestie enim eu est volutpat, convallis tristique odio vestibulum. Aliquam suscipit arcu ac ex pellentesque, eu pulvinar mi pretium. Phasellus ullamcorper lobortis enim nec fermentum. Mauris et aliquet elit. Duis at posuere ante. Quisque molestie ultricies sapien, sed laoreet lacus hendrerit a.<br/>Etiam vitae augue lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis iaculis sapien, vel porttitor dolor. Aenean eu ultrices massa. Proin eu tincidunt tortor. Donec aliquet auctor neque, et rhoncus risus sodales et. Suspendisse vel auctor ante.<br/>Cras tincidunt diam arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc convallis lacus tempor hendrerit convallis. Ut rutrum eros orci. Sed nec augue risus. Sed tempor mi et nisi venenatis lacinia. Suspendisse neque odio, tincidunt ut mattis sit amet, commodo sed enim. Curabitur faucibus enim massa, vel pellentesque magna tristique eget. Nunc fermentum sodales erat, et sollicitudin dui efficitur in. Maecenas facilisis aliquet dolor rhoncus commodo. In viverra hendrerit nisi, mattis hendrerit diam hendrerit et. Curabitur ac dolor cursus, placerat nibh at, euismod diam. Donec vehicula quam non metus lacinia malesuada.<br/>Cras tincidunt eu orci eu tristique. In malesuada, libero euismod vestibulum tristique, mi purus pretium enim, ut eleifend massa lacus at ligula. Cras consectetur, velit nec tincidunt congue, erat erat rhoncus mi, a laoreet metus velit ac nunc. Sed vitae massa vitae tellus hendrerit condimentum eget vel leo. Morbi eu felis sit amet urna molestie vulputate. Donec non fringilla sem. Curabitur pellentesque maximus pulvinar. Curabitur id dolor id magna convallis placerat. Sed at faucibus turpis, nec volutpat erat. Suspendisse eu mi quam. Fusce vitae nunc luctus, commodo arcu non, molestie purus. Pellentesque in arcu metus. Aliquam at dui ac velit aliquet blandit. In feugiat eu libero ac dapibus. Pellentesque sed mi ac quam vestibulum accumsan."
    },
    {
        name: 'Maxime "SveRKeR" A.',
        profilePicture: { src: "img/sverker.png", alt: "Image profil Maxime"},
        fullBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus sem, tempor non fringilla ut, accumsan id mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sapien est, dapibus eu tristique ut, consectetur eget purus. Pellentesque ut quam est. Suspendisse suscipit diam ac fringilla suscipit. Fusce gravida ex ut sem tincidunt vulputate. Nunc eget dui sit amet metus iaculis lacinia. Sed facilisis fringilla libero eu venenatis.<br/>Nam condimentum faucibus pellentesque. Ut sed convallis lacus. Sed pharetra, sem at placerat hendrerit, velit tellus gravida justo, et dictum arcu lectus eget est. Pellentesque scelerisque tortor eu velit tempor, in faucibus dui euismod. Mauris nisl orci, commodo vitae elit ut, volutpat consectetur augue. Suspendisse feugiat laoreet suscipit. Aenean dictum metus justo, quis molestie nisi aliquet non. Suspendisse vitae nisi at orci euismod sollicitudin. Sed at elit neque. Nunc facilisis lorem erat, non molestie metus volutpat eget. Sed fermentum lacus ut nibh convallis, sed laoreet massa faucibus. Aliquam erat volutpat. Donec suscipit purus quis dui ullamcorper, ac luctus neque cursus. Maecenas non commodo purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/>Morbi quam ipsum, placerat quis nisl sit amet, tincidunt molestie magna. Aliquam finibus ac velit pulvinar auctor. Sed eget eros ex. Suspendisse elementum in libero ut mollis. Suspendisse eleifend ac dolor nec consectetur. In hac habitasse platea dictumst. Nunc tincidunt justo in odio tempus faucibus. Duis a porta leo. Integer imperdiet, nibh maximus feugiat lacinia, mi lectus euismod nibh, et egestas magna dui quis libero. Phasellus id ipsum tempus, facilisis sem at, vehicula nisi. Donec lacinia malesuada neque, ut facilisis tortor dapibus ac. Fusce pellentesque arcu lorem, id sagittis metus vestibulum sit amet. Pellentesque malesuada vehicula consequat. Nullam eget odio bibendum, blandit augue at, congue ipsum. Donec et dolor eget justo ultrices semper. Mauris vulputate ultricies egestas.<br/>Curabitur quis hendrerit tortor. Nam non orci ut risus ornare tempus ac a nisi. Nullam quam odio, efficitur in dui id, pretium rutrum nulla. Donec molestie eros eget interdum rutrum. Proin pharetra ac purus et auctor. Nulla facilisi. Pellentesque mollis justo ante, id iaculis tellus commodo non. Pellentesque malesuada, nibh et commodo cursus, diam justo gravida lectus, eu mollis tortor leo in metus. Pellentesque convallis lacinia lectus a tristique. Vestibulum id justo nec lectus dictum viverra.<br/>Pellentesque fringilla libero in viverra convallis. Duis ut blandit tellus, eget pulvinar lacus. Duis luctus vestibulum odio id viverra. Integer nec sapien id sem ultrices aliquam. Phasellus auctor aliquam metus, ut tempus nibh eleifend in. Sed pretium magna purus, sit amet vulputate mauris dictum eget. Praesent quis orci et orci commodo eleifend vulputate in orci. Vivamus imperdiet porta dui, eget hendrerit dui euismod quis. Fusce pulvinar placerat augue, eget varius elit ultricies quis. Fusce tempor fermentum metus vel suscipit. Fusce id velit tellus. Aenean eu leo diam. Aliquam id lectus non sem elementum cursus vel sit amet nunc. Fusce id elit sit amet ligula ultrices finibus pretium non tortor. Ut lacus mi, viverra vitae vulputate vel, posuere ut lorem. Cras vehicula, purus id interdum faucibus, erat quam ullamcorper leo, eget commodo neque sem lobortis mauris."
    },
    {
        name: 'Martin "MadSandman" B.',
        profilePicture: { src: "img/martin_b.png", alt: "Image de profil Martin"},
        fullBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus vehicula mauris non pretium. Aenean fermentum magna et arcu sollicitudin mollis. Morbi leo sem, sollicitudin vitae rutrum sed, tristique in lacus. Vivamus orci dolor, pretium nec sagittis quis, aliquet sed ante. Duis ac sagittis lorem, sit amet malesuada libero. Nulla accumsan dolor iaculis quam pharetra venenatis. In sit amet condimentum erat.<br/>Aenean eu tellus tortor. Fusce congue sapien et orci sodales, in tincidunt lectus feugiat. Duis viverra erat dolor, non tincidunt dui pellentesque ac. Praesent pellentesque arcu purus, vel convallis mi porta a. Sed convallis elit ut nunc accumsan, quis feugiat purus lobortis. Nulla venenatis ligula non ipsum dictum ultricies. Pellentesque ultricies tellus mollis dolor imperdiet sollicitudin. Phasellus condimentum vulputate iaculis. Fusce vel sem nec magna condimentum blandit sit amet ultricies erat. Quisque id dui ut nunc viverra sodales ac eu ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non pretium erat, in condimentum lacus. Sed fringilla molestie erat vitae laoreet. Donec in faucibus mi. Vestibulum eu ligula ex. Nunc iaculis id diam vitae eleifend.<br/>Quisque id ultrices neque. Nam lacinia massa risus, et dignissim tortor cursus in. Mauris lorem turpis, sollicitudin ac auctor vel, facilisis non dolor. Pellentesque ultricies metus ac congue gravida. Cras sed lacus id purus mattis imperdiet. Curabitur lobortis euismod dignissim. Praesent nec dui consequat, volutpat enim eget, tincidunt erat. Suspendisse egestas arcu diam, at ullamcorper est facilisis et. Sed ornare diam feugiat iaculis lobortis. Suspendisse eget ullamcorper neque.<br/>Quisque accumsan rutrum magna at scelerisque. Donec sit amet mollis justo, eu aliquam massa. Praesent consectetur dignissim tellus, quis semper diam iaculis vulputate. Vestibulum vulputate bibendum viverra. Proin pharetra semper urna, nec porta lacus fermentum quis. Pellentesque viverra accumsan quam lacinia iaculis. Nulla id dolor enim. Ut non lacinia nulla, vitae sagittis arcu. Etiam in sollicitudin diam, at iaculis justo. Maecenas a turpis laoreet, hendrerit turpis feugiat, convallis urna.<br/>Aliquam ut augue blandit, euismod tellus id, vulputate justo. Ut laoreet lacus sit amet rhoncus pretium. Quisque ut convallis justo, non consequat lectus. Integer porta ullamcorper mauris ut ultrices. Suspendisse sodales accumsan lectus, quis scelerisque sapien bibendum a. Proin eget pulvinar nulla. Curabitur aliquam porta arcu, vitae porta nisi imperdiet ut. Phasellus fermentum mi id augue aliquam gravida. Etiam ac faucibus ligula. Donec nibh erat, laoreet id ultrices id, lobortis in felis. Nullam nec rutrum ante. Nullam lobortis lacus finibus felis facilisis, id congue ipsum sollicitudin. Duis massa sapien, facilisis eget eleifend in, rhoncus at ex. Mauris eu mi neque. Morbi congue nec enim eget accumsan."
    }
];

// ---- FUNCTIONS ----
function LoadMember(idMember) {
    let index = 0;

    switch (idMember) {
        case "Timoogo":
            index = 0;
            break;
        case "ImWallAshing":
            index = 1;
            break;
        case "SveRKeR":
            index = 2;
            break;
        case "MadSandman":
            index = 3;
            break;
        default:
            break;
    }

    document.getElementById('popupImage').src = members[index].profilePicture.src;
    document.getElementById('popupImage').alt = members[index].profilePicture.alt;
    document.getElementById("popupName").innerHTML = members[index].name;
    document.getElementById("popupFullBio").innerHTML = members[index].fullBio;
}

function OpenPopup(pseudo) {
    LoadMember(pseudo);
    document.getElementById("popupCard").className = "zoomIn";
    document.getElementById("popupCard").style.transform = "scale(1)";
    document.getElementById("popup").style.display = "flex";
}

function ClosePopup() {
    let element = document.getElementById("popupCard");

    element.classList.remove("zoomIn");
    void element.offsetWidth;
    element.classList.add("zoomOut");

    element.style.transform = "scale(0)";

    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 600);
}

// ---- EXEC ----
window.onload = function() {
    //Add a listener for each profile cards to open the corresponding popup
    Array.from(document.getElementsByClassName("profileCard")).forEach(function(element) {
        let id = element.id;
        element.addEventListener('click', function() {
            OpenPopup(id);
        })
    });

    //Add a listener for the close cross on the popup card
    document.getElementById('popupCloseBtn').addEventListener('click', function(event) { 
        event.preventDefault();
        ClosePopup(); 
    });

    //Add a listener for closing the popup when clicking outside the card
    document.getElementById('popup').addEventListener('click', function(event) {
        if(event.target == document.getElementById('popup')) {
            ClosePopup();
        }
    });
};