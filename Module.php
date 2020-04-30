<?php
namespace Branding;

use Omeka\Module\AbstractModule;
use Zend\EventManager\Event;
use Zend\EventManager\SharedEventManagerInterface;

class Module extends AbstractModule
{
    /** Module body **/

    /**
    * Get this module's configuration array.
    *
    * @return array
    */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';

    }

    public function addAsset(Event $event){
        $view = $event->getTarget();
        $view->headScript()->appendFile($view->assetUrl('js/branding.js', 'Branding'));


        if ($this->getServiceLocator()->get('Omeka\Status')->isSiteRequest()) {

            $view->headLink()->appendStylesheet($view->assetUrl('css/branding.css', 'Branding'));

            $view->headScript()->appendFile($view->assetUrl('js/site_footer.js', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_header.js', 'Branding'));
            echo $view->partial('common/header');
            echo $view->partial('common/footer');




        } else {
            echo $view->partial('common/header');

            $view->headScript()->prependFile($view->assetUrl('js/admin_header.js', 'Branding'));
            $view->headLink()->appendStylesheet($view->assetUrl('css/branding.css', 'Branding'));

        }






    }

    public function attachListeners(SharedEventManagerInterface $sharedEventManager)
    {
        $sharedEventManager->attach(
          '*',
          'view.layout',
          [$this, 'addAsset']
        );
    }


}
