let pageStyle={
    fontSize:16,
    weight:false,
    italic:false,
    underline:false,
    crossed:false
}


$('.fontSizeChanger').change(function(){
    pageStyle.fontSize=$('#fontSizeChanger').val()
    $('.page').css('font-size',`${pageStyle.fontSize}px`)
})

$('#weightChanger').mouseenter(function(){
    $('#weightChanger').css('color','orange')
    $('.page').css('font-weight','700')
})
$('#weightChanger').mouseleave(function(){
    if(pageStyle.weight==false){
        $('#weightChanger').css('color','#000')
        $('.page').css('font-weight','normal')
    }
 
});

$('#weightChanger').click(function(){
    if(pageStyle.weight==false){
        $('#weightChanger').css('color','orange');
        $('.page').css('font-weight,`700`')
        pageStyle.weight=true;
    }else if(pageStyle.weight==true){
        $('#weightChanger').css('color','#000')
        $('.page').css('font-weight',`normal`)
        pageStyle.weight=false;
    }
})





$('#cursyvChanger').mouseenter(function(){
    $('#cursyvChanger').css('color','orange')
    $('.page').css('font-style','italic')
})
$('#cursyvChanger').mouseleave(function(){
    if(pageStyle.italic==false){
        $('#cursyvChanger').css('color','#000')
        $('.page').css('font-style','normal')
    }
 
});

$('#cursyvChanger').click(function(){
    if(pageStyle.italic==false){
        $('#cursyvChanger').css('color','orange');
        $('.page').css('font-style,`italic`')
        pageStyle.italic=true;
    }else if(pageStyle.italic==true){
        $('#cursyvChanger').css('color','#000')
        $('.page').css('font-style',`normal`)
        pageStyle.italic=false;
    }
})




$('#underlineChanger').mouseenter(function(){
    $('#underlineChanger').css('color','orange')
    $('.page').css('text-decoration','underline')
})
$('#underlineChanger').mouseleave(function(){
    if(pageStyle.underline==false){
        $('#underlineChanger').css('color','#000')
        $('.page').css('text-decoration','none')
    }
 
});

$('#underlineChanger').click(function(){
    if(pageStyle.underline==false){
        $('#underlineChanger').css('color','orange');
        $('.page').css('text-decoration,`underline`')
        pageStyle.underline=true;
        pageStyle.crossed=true;
    }else if(pageStyle.underline==true){
        $('#underlineChanger').css('color','#000')
        $('.page').css('text-decoration',`none`)
        pageStyle.underline=false;
        pageStyle.crossed=false;
    }
})





$('#crossedChanger').mouseenter(function(){
    $('#crossedChanger').css('color','orange')
    $('.page').css('text-decoration','line-through')
})
$('#crossedChanger').mouseleave(function(){
    if(pageStyle.crossed==false){
        $('#crossedChanger').css('color','#000')
        $('.page').css('text-decoration','none')
    }
 
});

$('#crossedChanger').click(function(){
    if(pageStyle.crossed==false){
        $('#crossedChanger').css('color','orange');
        $('.page').css('text-decoration,`line-through `')
        pageStyle.underline=true;
        pageStyle.crossed=true;
    }else if(pageStyle.crossed==true){
        $('#crossedChanger').css('color','#000')
        $('.page').css('text-decoration',`none`)
        pageStyle.underline=false;
        pageStyle.crossed=false;
    }
})

$('#colorChanger').change(function(){
    // $('#page').css('color',`${colorChanger.val}`)
    console.log(`${$('#colorChanger.val()')}`)
})

// $('.container').hide(0);
// $('.container').show(1000);