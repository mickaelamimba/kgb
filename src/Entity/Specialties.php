<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SpecialtiesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=SpecialtiesRepository::class)
 */
class Specialties
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Agents::class, inversedBy="agentSpecialties")
     * @ORM\JoinColumn(nullable=false)
     */
    private $agents;

    /**
     * @ORM\OneToOne(targetEntity=Missions::class, mappedBy="specialtieMission", cascade={"persist", "remove"})
     */
    private $missions;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAgents(): ?Agents
    {
        return $this->agents;
    }

    public function setAgents(?Agents $agents): self
    {
        $this->agents = $agents;

        return $this;
    }

    public function getMissions(): ?Missions
    {
        return $this->missions;
    }

    public function setMissions(Missions $missions): self
    {
        // set the owning side of the relation if necessary
        if ($missions->getSpecialtieMission() !== $this) {
            $missions->setSpecialtieMission($this);
        }

        $this->missions = $missions;

        return $this;
    }
}
