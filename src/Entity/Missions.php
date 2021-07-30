<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\MissionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     paginationItemsPerPage=13,
 *     normalizationContext={"groups"={"missions:read"}},
 *     denormalizationContext={"groups"={"missions:write"}},
 *          collectionOperations={
 *     "get",
 *     "post"
 *     },
 *     itemOperations={
 *         "get",
 *         "put",
 *          "delete",
 *
 *     }
 *
 *
 * )
 * @ApiFilter(OrderFilter::class, properties={"title","country"})
 * @ApiFilter(SearchFilter::class,properties={"id": "exact","title":"exact",
 *     "description":"partial","codeName":"exact","country":"partial"})
 * @ORM\Entity(repositoryClass=MissionsRepository::class)
 */
class Missions
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *@Groups({"missions:read"})
     *
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"missions:read","missions:write"})
     *
     *
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"missions:read","missions:write"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"missions:read","missions:write"})
     *
     */
    private $codeName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"missions:read","missions:write"})
     *
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255)
     *@Groups({"missions:read","missions:write"})
     *
     */
    private $missionType;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le statut de la mission est obligatoire")
     *@Groups({"missions:read","missions:write"})
     */
    private $status;

    /**
     * @ORM\Column(type="date")
     *@Groups({"missions:read","missions:write"})
     */
    private $startDate;

    /**
     * @ORM\Column(type="date")
     *@Groups({"missions:read","missions:write"})
     */
    private $endDate;

    /**
     * @ORM\ManyToOne(targetEntity=Specialties::class, inversedBy="missionsSpecialties")
     * @Groups({"missions:read","missions:write"})
     */
    private $specialties;

    /**
     * @ORM\ManyToMany(targetEntity=Agents::class, mappedBy="agentsMissions")
     * @Groups({"missions:read","missions:write"})
     */
    private $agents;

    /**
     * @ORM\ManyToMany(targetEntity=Contacts::class, mappedBy="contactMissions")
     * @Groups({"missions:read","missions:write"})
     */
    private $contacts;

    /**
     * @ORM\ManyToOne(targetEntity=Stashs::class, inversedBy="stashMission")
     * @Groups({"missions:read","missions:write"})
     */
    private $stashs;

    /**
     * @ORM\ManyToMany(targetEntity=Targets::class, mappedBy="targetsMissions")
     * @Groups({"missions:read","missions:write"})
     */
    private $targets;


    public function __construct()
    {

        $this->stashMission = new ArrayCollection();
        $this->agents = new ArrayCollection();
        $this->contacts = new ArrayCollection();
        $this->targets = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getMissionType(): ?string
    {
        return $this->missionType;
    }

    public function setMissionType(string $missionType): self
    {
        $this->missionType = $missionType;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }


    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getSpecialties(): ?Specialties
    {
        return $this->specialties;
    }

    public function setSpecialties(?Specialties $specialties): self
    {
        $this->specialties = $specialties;

        return $this;
    }

    /**
     * @return Collection|Agents[]
     */
    public function getAgents(): Collection
    {
        return $this->agents;
    }

    public function addAgent(Agents $agent): self
    {
        if (!$this->agents->contains($agent)) {
            $this->agents[] = $agent;
            $agent->addAgentsMission($this);
        }

        return $this;
    }

    public function removeAgent(Agents $agent): self
    {
        if ($this->agents->removeElement($agent)) {
            $agent->removeAgentsMission($this);
        }

        return $this;
    }

    /**
     * @return Collection|Contacts[]
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contacts $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts[] = $contact;
            $contact->addContactMission($this);
        }

        return $this;
    }

    public function removeContact(Contacts $contact): self
    {
        if ($this->contacts->removeElement($contact)) {
            $contact->removeContactMission($this);
        }

        return $this;
    }

    public function getStashs(): ?Stashs
    {
        return $this->stashs;
    }

    public function setStashs(?Stashs $stashs): self
    {
        $this->stashs = $stashs;

        return $this;
    }

    /**
     * @return Collection|Targets[]
     */
    public function getTargets(): Collection
    {
        return $this->targets;
    }

    public function addTarget(Targets $target): self
    {
        if (!$this->targets->contains($target)) {
            $this->targets[] = $target;
            $target->addTargetsMission($this);
        }

        return $this;
    }

    public function removeTarget(Targets $target): self
    {
        if ($this->targets->removeElement($target)) {
            $target->removeTargetsMission($this);
        }

        return $this;
    }


}
