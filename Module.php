<?php
namespace Branding;

use Omeka\Module\AbstractModule;
use Laminas\EventManager\Event;
use Laminas\EventManager\SharedEventManagerInterface;

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

    public function addAsset(Event $event)
    {
        $view = $event->getTarget();
        if ($this->getServiceLocator()->get('Omeka\Status')->isSiteRequest()) {
            $view->headLink()->appendStylesheet($view->assetUrl('css/branding.css', 'Branding'));
            $view->headMeta()->appendName('asset:library_header_image', $view->assetUrl('img/library_header_image.png', 'Branding'));
            $view->headMeta()->appendName('asset:iopn_white_comp_trans', $view->assetUrl('img/iopn_white_comp_trans.png', 'Branding'));
            $view->headMeta()->appendName('asset:Library_Vert', $view->assetUrl('img/Library_Vert.png', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_header.js', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_footer.js', 'Branding'));

        } else {
            $view->headLink()->appendStylesheet($view->assetUrl('css/branding.css', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_footer.js', 'Branding'));
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
