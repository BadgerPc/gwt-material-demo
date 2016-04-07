package gwt.material.design.demo.client.application.polymer;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import gwt.material.design.demo.client.application.ApplicationPresenter;
import gwt.material.design.demo.client.place.NameTokens;

public class PolymerPresenter extends Presenter<PolymerPresenter.MyView, PolymerPresenter.MyProxy> {
    interface MyView extends View {
    }

    @NameToken(NameTokens.polymer)
    @ProxyStandard
    interface MyProxy extends ProxyPlace<PolymerPresenter> {
    }

    @Inject
    PolymerPresenter(
            EventBus eventBus,
            MyView view,
            MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.SLOT_MainContent);

    }

}
