$wnd.gwtmaterialdemo.runAsyncCallback17("function InlineSearchPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(920, 53, $intern_54, InlineSearchPresenter);\n_.onReveal = function onReveal_26(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Inline Search', 'Extending MaterialSearch component that be inlined in the navigation bar.', 'addins/signature/InlineSearchView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_search_InlineSearchPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.search', 'InlineSearchPresenter', 920);\nfunction InlineSearchView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_9(new InlineSearchView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1306, 61, $intern_55, InlineSearchView);\nvar Lgwt_material_design_demo_client_application_addins_search_InlineSearchView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.search', 'InlineSearchView', 1306);\nfunction $build_f_MaterialPanel1_9(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow7, f_MaterialTitle3, f_MaterialNavBar4, f_MaterialNavBrand5, f_MaterialNavSection6, search, f_MaterialTitle8, f_MaterialNavBar9, f_MaterialNavBrand10, f_MaterialNavSection11, openSearch, expandableInline;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_9(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Default Behaviour'))).html_0)) , fire_5(f_MaterialTitle3, 'Default Behaviour') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialNavBar4 = new MaterialNavBar , $add_32(f_MaterialNavBar4, (f_MaterialNavBrand5 = new MaterialNavBrand , $add_9(f_MaterialNavBrand5, f_MaterialNavBrand5.container) , $getElement(f_MaterialNavBrand5.container).textContent = 'App Title' , ($clinit_DOM() , f_MaterialNavBrand5.element_0).style['paddingLeft'] = ($clinit_Style$Unit() , '16.0px') , f_MaterialNavBrand5)) , $add_32(f_MaterialNavBar4, (f_MaterialNavSection6 = new MaterialNavSection , $add_14(f_MaterialNavSection6, new ListItem_0((search = new InlineSearch , $setDisplay(search, ($clinit_Display() , INLINE_0)) , search.element_0.style['width'] = '50%' , $setTheme(search, ($clinit_Theme() , LIGHT_0)) , $getElement(search.valueBoxBase).setAttribute('placeholder', 'Search') , $getText_2(search.label_1).length == 0 || $setStyleName(search.label_1, 'active') , search))) , f_MaterialNavSection6)) , f_MaterialNavBar4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialPanel1, (f_MaterialRow7 = new MaterialRow , $add_9(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), (new SafeHtmlString(htmlEscape('Expandable Behaviour'))).html_0) , fire_5(f_MaterialTitle8, 'Expandable Behaviour') , f_MaterialTitle8)) , $add_9(f_MaterialRow7, (f_MaterialNavBar9 = new MaterialNavBar , $add_32(f_MaterialNavBar9, (f_MaterialNavBrand10 = new MaterialNavBrand , $add_9(f_MaterialNavBrand10, f_MaterialNavBrand10.container) , $getElement(f_MaterialNavBrand10.container).textContent = 'App Title' , f_MaterialNavBrand10.element_0.style['paddingLeft'] = '16.0px' , f_MaterialNavBrand10)) , $add_32(f_MaterialNavBar9, (f_MaterialNavSection11 = new MaterialNavSection , $add_14(f_MaterialNavSection11, new ListItem_0((openSearch = new MaterialLink , $setIconType(openSearch, ($clinit_IconType() , SEARCH_0)) , $addClickHandler(openSearch, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , openSearch))) , $add_14(f_MaterialNavSection11, new ListItem_0((expandableInline = new ExpandableInlineSearch , $setDisplay(expandableInline, INLINE_0) , expandableInline.width_0 = '50%' , $setTheme(expandableInline, LIGHT_0) , $getElement(expandableInline.valueBoxBase).setAttribute('placeholder', 'Search') , $getText_2(expandableInline.label_1).length == 0 || $setStyleName(expandableInline.label_1, 'active') , this$static.owner.expandableInline = expandableInline , expandableInline))) , $setFloat(f_MaterialNavSection11, ($clinit_Style$Float() , RIGHT)) , f_MaterialNavSection11)) , f_MaterialNavBar9)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7));\n  return f_MaterialPanel1;\n}\n\nfunction InlineSearchView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new InlineSearchView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n}\n\ndefineClass(1777, 1, {}, InlineSearchView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_search_InlineSearchView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.search', 'InlineSearchView_BinderImpl/Widgets', 1777);\nfunction InlineSearchView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1778, 1, $intern_64, InlineSearchView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_122(event_0){\n  $open_11(this.this$11.owner.expandableInline);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_search_InlineSearchView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.search', 'InlineSearchView_BinderImpl/Widgets/1', 1778);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$_annotation$$none$$) {\n    result0 = new InlineSearchPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchView$_annotation$$none$$) {\n    result = new InlineSearchView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchView$_annotation$$none$$;\n}\n\ndefineClass(773, 1, $intern_106);\n_.onSuccess_0 = function onSuccess_18(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$search$InlineSearchPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $lambda$0_57(this$static){\n  this$static.focusHandler = $registerHandler_1(this$static, $addFocusHandler_0(this$static, new InlineSearch$lambda$2$Type(this$static)));\n  this$static.blurHandler = $registerHandler_1(this$static, $addBlurHandler_0(this$static, new InlineSearch$lambda$3$Type(this$static)));\n}\n\nfunction $onLoad_4(this$static){\n  $onLoad_2(this$static);\n  getLogger(($ensureNamesAreInitialized(Lgwt_material_design_incubator_client_base_IncubatorWidget_2_classLit) , Lgwt_material_design_incubator_client_base_IncubatorWidget_2_classLit.simpleName));\n  'This [' + $getSimpleName(this$static.___clazz) + '] component is under the incubation process and subject to change.';\n  $then_0(when(($clinit_Resolution() , ALL_MOBILE), stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_base_viewport_Boundary_2_classLit, 1), $intern_3, 221, 0, [])), makeLambdaFunction(InlineSearch$lambda$0$Type.prototype.call_7, InlineSearch$lambda$0$Type, [this$static]), new InlineSearch$lambda$1$Type(this$static));\n}\n\nfunction $setTheme(this$static, theme){\n  $setCssName((!this$static.cssNameMixin && (this$static.cssNameMixin = new CssNameMixin(this$static)) , this$static.cssNameMixin), theme);\n}\n\nfunction InlineSearch(){\n  $clinit_InlineSearch();\n  MaterialSearch.call(this);\n  setStyleName(($clinit_DOM() , this.element_0), 'inline-search', true);\n}\n\ndefineClass(633, 412, $intern_80, InlineSearch);\n_.onLoad = function onLoad_82(){\n  $onLoad_4(this);\n}\n;\nvar Lgwt_material_design_incubator_client_search_InlineSearch_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'InlineSearch', 633);\nfunction $lambda$0_58(this$static){\n  $setOn((!this$static.toggleStyleMixin && (this$static.toggleStyleMixin = new ToggleStyleMixin(this$static, 'open')) , this$static.toggleStyleMixin), false);\n  ($clinit_DOM() , this$static.element_0).style['width'] = '0px';\n}\n\nfunction $open_11(this$static){\n  $open_8(this$static);\n  $setOn((!this$static.toggleStyleMixin && (this$static.toggleStyleMixin = new ToggleStyleMixin(this$static, 'open')) , this$static.toggleStyleMixin), true);\n  $setWidth(this$static, this$static.width_0);\n}\n\nfunction ExpandableInlineSearch(){\n  $clinit_InlineSearch();\n  InlineSearch.call(this);\n  setStyleName(($clinit_DOM() , this.element_0), 'expandable-search', true);\n}\n\ndefineClass(2497, 633, $intern_80, ExpandableInlineSearch);\n_.onLoad = function onLoad_83(){\n  $onLoad_4(this);\n  getLogger(($ensureNamesAreInitialized(Lgwt_material_design_incubator_client_base_IncubatorWidget_2_classLit) , Lgwt_material_design_incubator_client_base_IncubatorWidget_2_classLit.simpleName));\n  $ensureNamesAreInitialized(Lgwt_material_design_incubator_client_search_ExpandableInlineSearch_2_classLit);\n  $registerHandler_1(this, $addHandler(this, new MaterialSearch$0methodref$onClose$Type(new ExpandableInlineSearch$lambda$0$Type(this)), TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type)));\n  $registerHandler_1(this, $addBlurHandler_0(this, new ExpandableInlineSearch$lambda$1$Type(this)));\n  $registerHandler_1(this, $addFocusHandler_0(this, new ExpandableInlineSearch$lambda$2$Type(this)));\n}\n;\n_.setWidth_0 = function setWidth_4(width_0){\n  this.width_0 = width_0;\n}\n;\nvar Lgwt_material_design_incubator_client_search_ExpandableInlineSearch_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'ExpandableInlineSearch', 2497);\nfunction ExpandableInlineSearch$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2498, 1, $intern_48, ExpandableInlineSearch$lambda$0$Type);\n_.onClose_0 = function onClose_19(arg0){\n  $lambda$0_58(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_incubator_client_search_ExpandableInlineSearch$lambda$0$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'ExpandableInlineSearch/lambda$0$Type', 2498);\nfunction ExpandableInlineSearch$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2499, 1, $intern_43, ExpandableInlineSearch$lambda$1$Type);\n_.onBlur = function onBlur_8(arg0){\n  setStyleName($getStyleElement(this.$$outer_0), 'inactive', true);\n}\n;\nvar Lgwt_material_design_incubator_client_search_ExpandableInlineSearch$lambda$1$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'ExpandableInlineSearch/lambda$1$Type', 2499);\nfunction ExpandableInlineSearch$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2500, 1, $intern_124, ExpandableInlineSearch$lambda$2$Type);\n_.onFocus = function onFocus_3(arg0){\n  setStyleName($getStyleElement(this.$$outer_0), 'inactive', false);\n}\n;\nvar Lgwt_material_design_incubator_client_search_ExpandableInlineSearch$lambda$2$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'ExpandableInlineSearch/lambda$2$Type', 2500);\nfunction InlineSearch$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3059, $wnd.Function, {}, InlineSearch$lambda$0$Type);\n_.call_7 = function call_150(arg0){\n  $lambda$0_57(this.$$outer_0);\n}\n;\nfunction InlineSearch$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2503, 1, {}, InlineSearch$lambda$1$Type);\nvar Lgwt_material_design_incubator_client_search_InlineSearch$lambda$1$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'InlineSearch/lambda$1$Type', 2503);\nfunction InlineSearch$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2501, 1, $intern_124, InlineSearch$lambda$2$Type);\n_.onFocus = function onFocus_4(arg0){\n  setStyleName($getStyleElement(this.$$outer_0), 'wide', true);\n}\n;\nvar Lgwt_material_design_incubator_client_search_InlineSearch$lambda$2$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'InlineSearch/lambda$2$Type', 2501);\nfunction InlineSearch$lambda$3$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2502, 1, $intern_43, InlineSearch$lambda$3$Type);\n_.onBlur = function onBlur_9(arg0){\n  setStyleName($getStyleElement(this.$$outer_0), 'wide', false);\n}\n;\nvar Lgwt_material_design_incubator_client_search_InlineSearch$lambda$3$Type_2_classLit = createForClass('gwt.material.design.incubator.client.search', 'InlineSearch/lambda$3$Type', 2502);\nfunction $clinit_Theme(){\n  $clinit_Theme = emptyMethod;\n  DEFAULT_10 = new Theme('DEFAULT', 0, '');\n  LIGHT_0 = new Theme('LIGHT', 1, 'light');\n  DARK = new Theme('DARK', 2, 'dark');\n}\n\nfunction Theme(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_74(){\n  $clinit_Theme();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_incubator_client_search_constants_Theme_2_classLit, 1), $intern_10, 339, 0, [DEFAULT_10, LIGHT_0, DARK]);\n}\n\ndefineClass(339, 28, {50:1, 339:1, 4:1, 42:1, 28:1}, Theme);\n_.getCssName = function getCssName_92(){\n  return this.cssClass;\n}\n;\nvar DARK, DEFAULT_10, LIGHT_0;\nvar Lgwt_material_design_incubator_client_search_constants_Theme_2_classLit = createForEnum('gwt.material.design.incubator.client.search.constants', 'Theme', 339, values_74);\n$entry(onLoad_1)(17);\n\n//# sourceURL=gwtmaterialdemo-17.js\n")