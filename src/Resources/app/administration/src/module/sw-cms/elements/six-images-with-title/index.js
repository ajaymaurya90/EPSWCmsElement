Shopware.Service('cmsService').registerCmsElement({
    name: 'epsw-six-images-with-title',
    label: 'sw-cms.elements.epswSixImagesWithTitle.label',
    component: 'sw-cms-el-epsw-six-images-with-title',
    configComponent: 'sw-cms-el-config-epsw-six-images-with-title',
    previewComponent: 'sw-cms-el-preview-epsw-six-images-with-title',
    defaultConfig: {
        dailyUrl: {
            source: 'static',
            value: ''
        }
    }
});
