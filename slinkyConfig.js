//SLINKY CONFIG
slinkyConfigs = {
	
	large2Row: function(){ 
		return ({

			displayFlag:function(){return true},
			onChangePub			: this.doScrollEvents,
			data                : null,
			maxWidthClassMap		: {mini:50,small:143,medium:244,large:2000},//large will apply to anything over medium limit
			lastContentBlock 		: {template :'<div class="lastContentItem"></div>',layoutType :'slinkyBlockItem',noScaling:true,w:300,h:390,isLastContentBlock:true},
			adapter             : this.dataAdapters.JudyItem,
			itemConstraint      :100,
			itemMargins         :[15,25],
			staticAxisOffset    :18,//px
			scrollAxisOffset    :20,//px
			scrollAxis          :'y',
			staticAxisCount     :1,//zero based
			//isLooping         :true,
			defaultLayout       :this.layouts.basicGridLayout,//<--- TODO:  this is not yet implemented.
			surfaceMap          :this.surfaceMaps.xyPlane,
			itemPreloading      :true,
			itemEasing            :true,
			itemEasingParams    :{
				touchCurve          :this.easings.easeOutCubic,
				swipeCurve          :this.easings.easeOutCubic,
				transitionCurve     :this.easings.easeOutElastic,
				easeTime            :1000,
				springLimit         :80 //in px
			}
		})
	}//large2Row

}