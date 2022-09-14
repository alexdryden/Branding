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
        $view->headScript()->appendFile($view->assetUrl('js/branding.js', 'Branding'));

        if ($this->getServiceLocator()->get('Omeka\Status')->isSiteRequest()) {
            $librarySrc = $view->assetUrl('img/library_header_image.png', 'Branding');
            $iopnSrc = $view->assetUrl('img/iopn_white_comp_trans.png', 'Branding');
            $view->headScript()->captureStart() ?>
            let brandingLogoSrc = "<?php echo $librarySrc; ?>";
            let brandingLogoIopnScr = "<?php echo $iopnSrc; ?>";
            <?php $view->headScript()->captureEnd();
            $view->headLink()->appendStylesheet($view->assetUrl('css/branding.css', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_footer.js', 'Branding'));
            $view->headScript()->appendFile($view->assetUrl('js/site_header.js', 'Branding'));
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
