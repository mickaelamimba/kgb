<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/Admin{reactRouting}", name="admin",priority="-1", defaults={"reactRouting":null}, requirements={"reactRouting": ".+"})
     */
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', []);
    }
}
